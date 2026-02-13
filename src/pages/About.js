// About Page for bigbensul

export function AboutPage() {
  return `
    <div class="container" style="padding-top: calc(80px + var(--space-8)); max-width: 800px;">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <h1 class="section-title">About <span class="text-gradient">bigbensul</span></h1>
        <p class="section-subtitle">Your smart decision engine for digital tools.</p>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>🎯 Our Mission</h3>
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4);">
          We believe finding the right tool shouldn't be overwhelming. With thousands of SaaS products, 
          AI tools, and digital services launching every month, it's harder than ever to know what's 
          actually worth your time and money.
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          bigbensul cuts through the noise. We help you discover the best tools based on what you actually 
          want to accomplish — not just feature lists and marketing hype.
        </p>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>✨ What Makes Us Different</h3>
        <ul style="color: var(--text-secondary); line-height: 2; padding-left: var(--space-6);">
          <li><strong>Intent-first discovery</strong> — Browse by goals, not categories</li>
          <li><strong>Honest reviews</strong> — We tell you who should NOT use a tool</li>
          <li><strong>No rankings for sale</strong> — Featured tools are based on merit</li>
          <li><strong>Real deals</strong> — Verified discounts and offers</li>
          <li><strong>Transparency</strong> — We clearly disclose affiliate relationships</li>
        </ul>
      </div>
      
      <div class="tool-detail-section" style="margin-bottom: var(--space-8);">
        <h3>💰 How We Make Money</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          bigbensul is free to use. We earn commissions when you sign up for tools through our links. 
          This doesn't affect our recommendations — we only feature tools we'd genuinely use ourselves. 
          Every placement is based on quality, not payment.
        </p>
      </div>
      
      <div class="tool-detail-section">
        <h3>📧 Get in Touch</h3>
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4);">
          Have a question, suggestion, or want to submit a tool?
        </p>
        <a href="mailto:hello@bigbensul.tools" class="btn btn-primary">Contact Us</a>
        <a href="/submit" class="btn btn-secondary" style="margin-left: var(--space-3);">Submit a Tool</a>
      </div>
    </div>
  `;
}
