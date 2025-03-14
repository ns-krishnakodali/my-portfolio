import cx from 'classnames';

export const ContactMeForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="contact-me__form-container">
        <input
          id="name"
          className="contact-me__form-input"
          placeholder="Name"
          type="text"
          required
        />
        <input
          id="email"
          className="contact-me__form-input"
          placeholder="Email Address"
          type="email"
          required
        />
        <input
          id="mobile-number"
          className="contact-me__form-input"
          placeholder="Mobile Number"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <textarea
          id="your-message"
          className={cx(
            'contact-me__form-input',
            'contact-me__form-message',
            'contact-me__floating-input'
          )}
          placeholder="Your Message"
          required
        />
        <button id="submit" type="submit" className="contact-me__send-button">
          Send
        </button>
      </div>
    </form>
  );
};
