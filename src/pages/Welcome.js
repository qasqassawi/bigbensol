// Welcome Page for bigbensul
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function WelcomePage() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <div class="welcome-screen" id="welcome-screen">
      <canvas id="welcome-canvas"></canvas>
      
      <div class="welcome-content">
        <div class="welcome-logo-container">
          <div class="welcome-logo-icon">B</div>
        </div>
        
        <h1 class="welcome-title reveal">
          ${lang === 'ar' ? 'مرحباً بك في' : 'Welcome to'} <span class="text-gradient">bigbensul</span>
        </h1>
        
        <p class="welcome-subtitle reveal reveal-delay-1">
          ${t('hero.description')}
        </p>
        
        <div class="welcome-actions reveal reveal-delay-2">
          <a href="/home" class="btn btn-primary btn-xl" id="enter-btn">
            ${lang === 'ar' ? 'دخول التجربة' : 'Enter Experience'}
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>

      <div class="welcome-footer reveal reveal-delay-3">
        <p>© ${new Date().getFullYear()} bigbensul • Premium Digital Discovery</p>
      </div>
    </div>
  `;
}

export function initWelcomePage() {
  const canvas = document.getElementById('welcome-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5;
    }

    draw() {
      ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      // Move particles randomly
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          const push = force * this.density;

          this.x += directionX * push * 0.1;
          this.y += directionY * push * 0.1;
        }
      }
    }
  }

  const init = () => {
    particles = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }
  };

  const connect = () => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          let opacity = 1 - (distance / 150);
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }

      // Connect to mouse
      if (mouse.x !== null) {
        let dx = particles[a].x - mouse.x;
        let dy = particles[a].y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let opacity = 1 - (distance / mouse.radius);
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  };

  init();
  animate();

  // Entrance animations for content
  const reveals = document.querySelectorAll('.reveal');
  setTimeout(() => {
    reveals.forEach(el => el.classList.add('active'));
  }, 100);

  return () => {
    window.removeEventListener('resize', resize);
  };
}
