// Mock data for bigbensul platform
// Structured for easy future API integration

export const categories = [
    { id: 'coding', name: 'Learn Coding', icon: '💻', count: 24 },
    { id: 'website', name: 'Build a Website', icon: '🌐', count: 31 },
    { id: 'study', name: 'Study Faster', icon: '📚', count: 18 },
    { id: 'video', name: 'Edit Videos', icon: '🎬', count: 22 },
    { id: 'content', name: 'Create Content', icon: '✏️', count: 35 },
    { id: 'business', name: 'Grow a Business', icon: '📈', count: 28 },
    { id: 'design', name: 'Design Graphics', icon: '🎨', count: 19 },
    { id: 'automate', name: 'Automate Tasks', icon: '⚡', count: 16 }
];

export const tools = [
    {
        id: 'figma',
        name: 'Figma',
        tagline: 'The collaborative design tool for modern teams',
        description: 'Design, prototype, and collaborate all in one place. Perfect for UI/UX designers who work with teams.',
        logo: '🎨',
        category: 'design',
        categories: ['design', 'website'],
        rating: 4.9,
        reviewCount: 2840,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['3 projects', 'Unlimited collaborators'] },
                { name: 'Professional', price: '$12/mo', features: ['Unlimited projects', 'Team libraries'] },
                { name: 'Organization', price: '$45/mo', features: ['Design systems', 'SSO'] }
            ]
        },
        tags: ['Free Plan', 'Collaboration', 'Best for Teams'],
        bestFor: ['UI/UX designers', 'Product teams', 'Agencies', 'Startups'],
        notFor: ['Print design', 'Photo editing', 'Complex illustrations'],
        pros: [
            'Real-time collaboration is seamless',
            'Generous free tier for individuals',
            'Excellent prototyping features',
            'Strong plugin ecosystem',
            'Works in browser - no installation'
        ],
        cons: [
            'Requires internet connection',
            'Can be slow with very large files',
            'Learning curve for advanced features'
        ],
        affiliateUrl: '#',
        deal: null,
        featured: true,
        editorPick: true
    },
    {
        id: 'notion',
        name: 'Notion',
        tagline: 'All-in-one workspace for notes, docs, and projects',
        description: 'Replace multiple tools with one powerful workspace. Notes, wikis, databases, and project management united.',
        logo: '📝',
        category: 'productivity',
        categories: ['study', 'business', 'automate'],
        rating: 4.8,
        reviewCount: 5230,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['Unlimited pages', '5MB uploads'] },
                { name: 'Plus', price: '$8/mo', features: ['Unlimited uploads', 'Unlimited guests'] },
                { name: 'Business', price: '$15/mo', features: ['SAML SSO', 'Advanced permissions'] }
            ]
        },
        tags: ['Free Plan', 'All-in-One', 'Best for Students'],
        bestFor: ['Students', 'Note-takers', 'Small teams', 'Knowledge workers'],
        notFor: ['Enterprise with strict compliance', 'Real-time collaboration at scale'],
        pros: [
            'Incredibly flexible and customizable',
            'Great template gallery',
            'Powerful database features',
            'Clean, minimal interface',
            'Free for personal use'
        ],
        cons: [
            'Can be overwhelming at first',
            'Mobile app could be faster',
            'No offline mode on free plan'
        ],
        affiliateUrl: '#',
        deal: { discount: '20% OFF', code: 'BIGBENSUL20', expires: '2026-03-01' },
        featured: true,
        editorPick: true
    },
    {
        id: 'vercel',
        name: 'Vercel',
        tagline: 'Deploy web projects with zero configuration',
        description: 'The platform for frontend developers. Deploy instantly, scale automatically, and collaborate effortlessly.',
        logo: '▲',
        category: 'website',
        categories: ['website', 'coding'],
        rating: 4.9,
        reviewCount: 1890,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Hobby', price: '$0', features: ['Personal projects', 'Automatic HTTPS'] },
                { name: 'Pro', price: '$20/mo', features: ['Team collaboration', 'Advanced analytics'] },
                { name: 'Enterprise', price: 'Custom', features: ['SLA', 'Priority support'] }
            ]
        },
        tags: ['Free Plan', 'Developer Friendly', 'AI-Powered'],
        bestFor: ['Frontend developers', 'React/Next.js projects', 'JAMstack sites'],
        notFor: ['Backend-heavy apps', 'Non-JavaScript projects'],
        pros: [
            'Instant deployments from Git',
            'Excellent Next.js integration',
            'Global edge network',
            'Great free tier',
            'Preview deployments for PRs'
        ],
        cons: [
            'Pricing can escalate quickly',
            'Vendor lock-in concerns',
            'Limited backend features'
        ],
        affiliateUrl: '#',
        deal: null,
        featured: true,
        editorPick: false
    },
    {
        id: 'canva',
        name: 'Canva',
        tagline: 'Design anything, even if you\'re not a designer',
        description: 'Create stunning graphics, presentations, and social media posts with drag-and-drop simplicity.',
        logo: '🎯',
        category: 'design',
        categories: ['design', 'content', 'business'],
        rating: 4.7,
        reviewCount: 8920,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['250K+ templates', '5GB storage'] },
                { name: 'Pro', price: '$12.99/mo', features: ['Brand kits', 'Background remover'] },
                { name: 'Teams', price: '$14.99/mo', features: ['Collaboration', 'Admin controls'] }
            ]
        },
        tags: ['Free Plan', 'Beginner Friendly', 'Templates'],
        bestFor: ['Non-designers', 'Social media managers', 'Small businesses', 'Content creators'],
        notFor: ['Professional print work', 'Complex illustrations', 'UI/UX design'],
        pros: [
            'Extremely easy to use',
            'Massive template library',
            'Great for social media content',
            'Magic Resize saves time',
            'Collaboration features'
        ],
        cons: [
            'Limited for complex designs',
            'Export quality limitations',
            'Can feel restrictive for pros'
        ],
        affiliateUrl: '#',
        deal: { discount: '30 Day Pro Trial', code: null, expires: null },
        featured: true,
        editorPick: true
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT Plus',
        tagline: 'AI assistant for writing, coding, and learning',
        description: 'The most capable AI chatbot. Get help with writing, analysis, coding, and creative tasks.',
        logo: '🤖',
        category: 'ai',
        categories: ['coding', 'study', 'content', 'automate'],
        rating: 4.8,
        reviewCount: 12400,
        pricing: {
            type: 'subscription',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['GPT-3.5', 'Limited usage'] },
                { name: 'Plus', price: '$20/mo', features: ['GPT-4', 'Priority access'] },
                { name: 'Team', price: '$25/mo', features: ['Workspace', 'Admin controls'] }
            ]
        },
        tags: ['AI-Powered', 'Free Plan', 'Best for Learning'],
        bestFor: ['Writers', 'Developers', 'Students', 'Researchers', 'Content creators'],
        notFor: ['Tasks requiring real-time data', 'Highly specialized domains'],
        pros: [
            'Incredibly versatile',
            'Great for brainstorming',
            'Helpful for coding',
            'Improving rapidly',
            'Plugin ecosystem'
        ],
        cons: [
            'Can hallucinate facts',
            'Knowledge cutoff date',
            'Rate limits on free tier'
        ],
        affiliateUrl: '#',
        deal: null,
        featured: true,
        editorPick: true
    },
    {
        id: 'udemy',
        name: 'Udemy',
        tagline: 'Learn anything from world-class instructors',
        description: 'Access 200,000+ courses on every topic imaginable. From coding to cooking, learn at your own pace.',
        logo: '🎓',
        category: 'learning',
        categories: ['coding', 'study', 'business'],
        rating: 4.5,
        reviewCount: 15600,
        pricing: {
            type: 'one-time',
            free: false,
            plans: [
                { name: 'Per Course', price: '$12-200', features: ['Lifetime access', 'Certificate'] },
                { name: 'Business', price: '$360/year', features: ['5000+ courses', 'Team analytics'] }
            ]
        },
        tags: ['Lifetime Access', 'Frequent Sales', 'Best for Self-Learners'],
        bestFor: ['Self-directed learners', 'Career changers', 'Skill builders'],
        notFor: ['Those needing accredited degrees', 'Live instruction fans'],
        pros: [
            'Huge course selection',
            'Frequent sales ($10-15 courses)',
            'Lifetime access to purchases',
            'Learn at your own pace',
            '30-day refund policy'
        ],
        cons: [
            'Quality varies by instructor',
            'No certification recognized by employers',
            'Confusing pricing model'
        ],
        affiliateUrl: '#',
        deal: { discount: 'Up to 90% OFF', code: null, expires: '2026-02-14' },
        featured: false,
        editorPick: false
    },
    {
        id: 'webflow',
        name: 'Webflow',
        tagline: 'Build professional websites without code',
        description: 'Visual website builder that generates clean, semantic code. Design freedom meets developer quality.',
        logo: '🌊',
        category: 'website',
        categories: ['website', 'design'],
        rating: 4.7,
        reviewCount: 2100,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Starter', price: '$0', features: ['2 projects', 'webflow.io domain'] },
                { name: 'Basic', price: '$14/mo', features: ['Custom domain', '150 pages'] },
                { name: 'CMS', price: '$23/mo', features: ['2000 CMS items', 'Blog features'] }
            ]
        },
        tags: ['No-Code', 'Professional Quality', 'Best for Designers'],
        bestFor: ['Designers wanting code control', 'Agencies', 'Marketing sites'],
        notFor: ['Complex web apps', 'E-commerce at scale', 'Beginners'],
        pros: [
            'Incredible design freedom',
            'Clean, semantic code output',
            'Great CMS functionality',
            'Excellent hosting included',
            'Strong animations support'
        ],
        cons: [
            'Steep learning curve',
            'Can get expensive',
            'Limited e-commerce features'
        ],
        affiliateUrl: '#',
        deal: null,
        featured: false,
        editorPick: true
    },
    {
        id: 'capcut',
        name: 'CapCut',
        tagline: 'Free video editing that rivals the pros',
        description: 'Professional-grade video editing made simple. Perfect for social media content creators.',
        logo: '✂️',
        category: 'video',
        categories: ['video', 'content'],
        rating: 4.6,
        reviewCount: 6800,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['Full editing suite', 'Watermark-free'] },
                { name: 'Pro', price: '$7.99/mo', features: ['Premium effects', 'Cloud storage'] }
            ]
        },
        tags: ['Free', 'Mobile & Desktop', 'Best for TikTok'],
        bestFor: ['TikTok creators', 'Instagram Reels', 'YouTube Shorts', 'Beginners'],
        notFor: ['Long-form content', 'Professional film', 'Audio-heavy projects'],
        pros: [
            'Completely free with no watermark',
            'Easy to learn interface',
            'Great mobile and desktop apps',
            'Trending effects library',
            'Auto-captions feature'
        ],
        cons: [
            'Limited for long-form video',
            'Some privacy concerns',
            'Less control than pro tools'
        ],
        affiliateUrl: '#',
        deal: null,
        featured: false,
        editorPick: false
    },
    {
        id: 'github',
        name: 'GitHub',
        tagline: 'Where the world builds software',
        description: 'The home for all developers. Host code, collaborate on projects, and build your portfolio.',
        logo: '🐙',
        category: 'coding',
        categories: ['coding', 'website'],
        rating: 4.9,
        reviewCount: 9200,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['Public & private repos', 'GitHub Actions'] },
                { name: 'Pro', price: '$4/mo', features: ['Advanced insights', 'Protected branches'] },
                { name: 'Team', price: '$4/user/mo', features: ['Team access controls'] }
            ]
        },
        tags: ['Free Plan', 'Industry Standard', 'Best for Developers'],
        bestFor: ['Developers', 'Open source contributors', 'Teams', 'Students'],
        notFor: ['Non-developers', 'Document collaboration'],
        pros: [
            'Industry standard for code hosting',
            'Excellent free tier',
            'GitHub Actions for CI/CD',
            'Great community',
            'Free for students'
        ],
        cons: [
            'Can be complex for beginners',
            'UI occasionally confusing',
            'Microsoft ownership concerns'
        ],
        affiliateUrl: '#',
        deal: { discount: 'Free Pro for Students', code: null, expires: null },
        featured: false,
        editorPick: true
    },
    {
        id: 'zapier',
        name: 'Zapier',
        tagline: 'Connect your apps and automate workflows',
        description: 'Create automated workflows between 5000+ apps. No coding required.',
        logo: '⚡',
        category: 'automate',
        categories: ['automate', 'business'],
        rating: 4.6,
        reviewCount: 3400,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['100 tasks/mo', '5 Zaps'] },
                { name: 'Starter', price: '$19.99/mo', features: ['750 tasks/mo', '20 Zaps'] },
                { name: 'Professional', price: '$49/mo', features: ['2000 tasks/mo', 'Unlimited Zaps'] }
            ]
        },
        tags: ['No-Code', 'Automation', 'Best for Business'],
        bestFor: ['Small businesses', 'Marketers', 'Operations teams', 'Solopreneurs'],
        notFor: ['Complex enterprise workflows', 'Real-time integrations'],
        pros: [
            '5000+ app integrations',
            'Easy to set up',
            'Reliable and well-documented',
            'Great templates library',
            'Multi-step Zaps'
        ],
        cons: [
            'Gets expensive quickly',
            'Task limits feel restrictive',
            'Some integrations are limited'
        ],
        affiliateUrl: '#',
        deal: { discount: '14-Day Free Trial', code: null, expires: null },
        featured: false,
        editorPick: false
    },
    {
        id: 'shopify',
        name: 'Shopify',
        tagline: 'The complete commerce platform',
        description: 'Everything you need to sell online, in-person, and everywhere in between.',
        logo: '🛒',
        category: 'business',
        categories: ['business', 'website'],
        rating: 4.7,
        reviewCount: 7800,
        pricing: {
            type: 'subscription',
            free: false,
            plans: [
                { name: 'Basic', price: '$29/mo', features: ['Online store', '2 staff accounts'] },
                { name: 'Shopify', price: '$79/mo', features: ['5 staff accounts', 'Reports'] },
                { name: 'Advanced', price: '$299/mo', features: ['15 staff accounts', 'Advanced reports'] }
            ]
        },
        tags: ['E-Commerce', 'All-in-One', 'Best for Online Stores'],
        bestFor: ['Online store owners', 'Dropshippers', 'Retail businesses'],
        notFor: ['Content-only sites', 'Tight budgets', 'Highly custom needs'],
        pros: [
            'Easy to set up and manage',
            'Excellent app ecosystem',
            'Reliable hosting included',
            'Great payment processing',
            'Multi-channel selling'
        ],
        cons: [
            'Monthly fees add up',
            'Transaction fees on external gateways',
            'Limited customization without code'
        ],
        affiliateUrl: '#',
        deal: { discount: '$1/mo for 3 months', code: null, expires: '2026-02-28' },
        featured: true,
        editorPick: true
    },
    {
        id: 'grammarly',
        name: 'Grammarly',
        tagline: 'Write with confidence everywhere',
        description: 'AI-powered writing assistant that helps you communicate clearly and effectively.',
        logo: '✍️',
        category: 'writing',
        categories: ['content', 'study', 'business'],
        rating: 4.6,
        reviewCount: 4500,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['Basic writing suggestions', 'Tone detection'] },
                { name: 'Premium', price: '$12/mo', features: ['Full writing feedback', 'Plagiarism checker'] },
                { name: 'Business', price: '$15/mo', features: ['Style guides', 'Analytics'] }
            ]
        },
        tags: ['Free Plan', 'AI-Powered', 'Best for Writers'],
        bestFor: ['Writers', 'Students', 'Professionals', 'Non-native speakers'],
        notFor: ['Creative writing', 'Technical documentation'],
        pros: [
            'Works everywhere (browser, apps)',
            'Catches more than basic grammar',
            'Tone and clarity suggestions',
            'Good free version',
            'Plagiarism checker (Premium)'
        ],
        cons: [
            'Can be overly aggressive',
            'Premium is pricey',
            'Sometimes misses context'
        ],
        affiliateUrl: '#',
        deal: { discount: '40% OFF Premium', code: 'BIGBENSUL40', expires: '2026-03-15' },
        featured: false,
        editorPick: false
    },
    {
        id: 'logome',
        name: 'Logome.ai',
        tagline: 'AI-powered logo designer for unique branding',
        description: 'Logome.ai uses artificial intelligence to generate professional and unique logos in seconds. Perfect for startups, side projects, and entrepreneurs who need a brand identity quickly.',
        logo: '💎',
        category: 'design',
        categories: ['design'],
        rating: 4.8,
        reviewCount: 1240,
        pricing: {
            type: 'freemium',
            free: true,
            plans: [
                { name: 'Free', price: '$0', features: ['AI logo generation', 'Low-res previews'] },
                { name: 'Basic', price: '$29', features: ['High-res logo files', 'Commercial license'] },
                { name: 'Professional', price: '$59', features: ['Full brand kit', 'Vector files', 'Social media assets'] }
            ]
        },
        tags: ['AI-Powered', 'Logo Maker', 'Branding'],
        bestFor: ['Startups', 'Entrepreneurs', 'Side projects', 'Quick branding'],
        notFor: ['Complex manual illustration', 'Print-heavy agencies', 'Custom font design from scratch'],
        pros: [
            'Fast and efficient AI generation',
            'Beautiful and unique logo options',
            'Easy to use with no design skills',
            'Affordable branding solutions'
        ],
        cons: [
            'Limited manual control compared to AI/PS',
            'Requires subscription for high-res exports',
            'AI occasionally generates generic icons'
        ],
        affiliateUrl: 'http://bit.ly/4rmic7C',
        deal: null,
        featured: true,
        editorPick: false
    }
];

export const testimonials = [
    {
        id: 1,
        quote: "bigbensul helped me find the perfect tools for my freelance business. Saved hours of research!",
        author: "Sarah K.",
        role: "Freelance Designer",
        avatar: "S"
    },
    {
        id: 2,
        quote: "Finally, a site that actually explains what tools are good for instead of just listing features.",
        author: "Marcus T.",
        role: "Computer Science Student",
        avatar: "M"
    },
    {
        id: 3,
        quote: "The honest pros and cons helped me avoid a tool that wouldn't have worked for my use case.",
        author: "Elena R.",
        role: "Content Creator",
        avatar: "E"
    }
];

export const stats = [
    { label: 'Tools Listed', value: 150, suffix: '+' },
    { label: 'Categories', value: 12, suffix: '' },
    { label: 'Monthly Users', value: 25, suffix: 'K+' },
    { label: 'Active Deals', value: 40, suffix: '+' }
];

export const searchPlaceholders = [
    "I want to learn coding",
    "I want to build a website",
    "I want to edit videos",
    "I want to grow on social media",
    "I want to study faster",
    "I want to automate my work"
];

export const searchChips = [
    'Coding',
    'Studying',
    'Content Creation',
    'Design',
    'Business',
    'Productivity',
    'AI Tools',
    'Automation'
];

export const filters = {
    pricing: [
        { id: 'free', label: 'Free' },
        { id: 'freemium', label: 'Freemium' },
        { id: 'paid', label: 'Paid Only' }
    ],
    features: [
        { id: 'hasDiscount', label: 'Has Discount' },
        { id: 'beginnerFriendly', label: 'Beginner Friendly' },
        { id: 'forStudents', label: 'Best for Students' },
        { id: 'forPros', label: 'Best for Professionals' }
    ],
    type: [
        { id: 'ai', label: 'AI-Powered' },
        { id: 'noCode', label: 'No-Code' },
        { id: 'web', label: 'Web App' },
        { id: 'mobile', label: 'Mobile App' }
    ]
};

// Helper functions
export function getToolsByCategory(categoryId) {
    return tools.filter(tool => tool.categories.includes(categoryId));
}

export function getFeaturedTools() {
    return tools.filter(tool => tool.featured);
}

export function getEditorPicks() {
    return tools.filter(tool => tool.editorPick);
}

export function getToolsWithDeals() {
    return tools.filter(tool => tool.deal !== null);
}

export function searchTools(query) {
    const lowerQuery = query.toLowerCase();
    return tools.filter(tool =>
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.tagline.toLowerCase().includes(lowerQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

export function getToolById(id) {
    return tools.find(tool => tool.id === id);
}
