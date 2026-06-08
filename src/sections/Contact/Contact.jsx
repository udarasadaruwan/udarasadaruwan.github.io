import styles from "./ContactStyles.module.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          alert("Thank you for your message. I will get back to you soon.");
        } else {
          alert(
            "Oops! There was a problem submitting your form. Please try again.",
          );
        }
      })
      .catch(() => {
        alert(
          "Oops! There was a problem submitting your form. Please try again.",
        );
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>Let us build something</p>
        <h2 className="sectionTitle">Contact</h2>
        <p className={styles.intro}>
          Send a short message about your idea, project, or collaboration.
        </p>
      </div>
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
