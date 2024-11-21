import styles from './ContactStyles.module.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Submit the form using Formspree
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset(); // Clear the form fields
          alert('🎉 Thank you for your message! 😊 I will get back to you soon! 📨'); // Show a success message
        } else {
          alert('😢 Oops! There was a problem submitting your form. Please try again. 💔');
        }
      })
      .catch(() => {
        alert('😢 Oops! There was a problem submitting your form. Please try again. 💔');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        action="https://formspree.io/f/mrbglypl"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
