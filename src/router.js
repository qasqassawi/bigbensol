// Simple client-side router for bigbensul

class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;

        window.addEventListener('popstate', () => this.handleRoute());

        // Handle link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="/"]');
            if (link) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });
    }

    addRoute(path, handler) {
        this.routes.set(path, handler);
    }

    navigate(path) {
        if (path !== window.location.pathname) {
            history.pushState(null, '', path);
            this.handleRoute();
        }
    }

    handleRoute() {
        const path = window.location.pathname;

        // Try exact match first
        if (this.routes.has(path)) {
            this.currentRoute = path;
            this.routes.get(path)();
            return;
        }

        // Try dynamic routes
        for (const [routePath, handler] of this.routes) {
            const params = this.matchRoute(routePath, path);
            if (params) {
                this.currentRoute = routePath;
                handler(params);
                return;
            }
        }

        // 404 - default to home
        if (this.routes.has('/')) {
            this.navigate('/');
        }
    }

    matchRoute(routePath, actualPath) {
        const routeParts = routePath.split('/');
        const actualParts = actualPath.split('/');

        if (routeParts.length !== actualParts.length) {
            return null;
        }

        const params = {};

        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
                params[routeParts[i].slice(1)] = actualParts[i];
            } else if (routeParts[i] !== actualParts[i]) {
                return null;
            }
        }

        return params;
    }

    getCurrentPath() {
        return window.location.pathname;
    }
}

export const router = new Router();
