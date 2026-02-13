// Email Capture Component for bigbensul

export function EmailCapture() {
  return `
    <section class="container">
      <div class="email-capture reveal">
        <h3>Get the best tools for your goals</h3>
        <p>Curated recommendations delivered once a week. No spam, just value.</p>
        <form class="email-form" id="email-form">
          <input type="email" placeholder="Enter your email" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}

export function initEmailCapture() {
  const form = document.getElementById('email-form');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;

    // Simulate submission
    form.innerHTML = `
      <p style="font-size: 1.25rem;">✓ Thanks for subscribing!</p>
      <p style="opacity: 0.8;">We'll send you the best tools every week.</p>
    `;

    console.log('Email captured:', email);
  });
}
