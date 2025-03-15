import cx from 'classnames';

import { useState } from 'react';

import { MY_EMAIL } from '../../constants';

export const ContactMeForm = () => {
  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (number) => {
    const numbers = number.replace(/\D/g, '');

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
  };

  const handleNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedNumber);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    if (values?.email === MY_EMAIL) {
      // Replace with Notifications
      alert('Not my email');
    }
    console.log(values);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="contact-me__form-container">
        <input
          id="name"
          name="name"
          className="contact-me__form-input"
          placeholder="Name"
          type="text"
          required
        />
        <input
          id="email"
          name="email"
          className="contact-me__form-input"
          placeholder="Email Address"
          type="email"
          required
        />
        <input
          id="mobile-number"
          name="number"
          className="contact-me__form-input"
          placeholder="Mobile Number"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phone}
          onChange={handleNumberChange}
          length={10}
        />
        <textarea
          id="your-message"
          name="message"
          className={cx('contact-me__form-input', 'contact-me__form-message')}
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
