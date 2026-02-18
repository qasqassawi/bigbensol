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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    console.log(data);
  };
}