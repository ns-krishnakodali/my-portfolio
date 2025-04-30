import cx from 'classnames';

import { useState } from 'react';

import {
  CONTACT_FAILURE_NOTIFICATION,
  CONTACT_ME_SAME_MAIL_NOTIFICATION,
  CONTACT_SUCCESS_NOTIFICATION,
  MY_EMAIL,
} from '../../constants';
import { formatPhoneNumber } from '../../utils';

export const ContactMeForm = ({ displayNotification }) => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedNumber);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    if (values?.email === MY_EMAIL) {
      displayNotification('failure', CONTACT_ME_SAME_MAIL_NOTIFICATION);
      return;
    }

    setIsLoading(true);
    fetch(import.meta.env.VITE_CONTACT_ME_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: values.name,
        userEmail: values.email,
        mobile: values.number,
        message: values.message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return;
      })
      .then(() => {
        displayNotification('success', CONTACT_SUCCESS_NOTIFICATION);
      })
      .catch((error) => {
        console.error('Error:', error);
        displayNotification('failure', CONTACT_FAILURE_NOTIFICATION);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          name="mobile"
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
        {isLoading ? (
          <img
            src="assets/generic/spinner.svg"
            alt="Loading Spinner"
            className="contact-me__loader"
          />
        ) : (
          <button id="submit" type="submit" className="contact-me__send-button">
            Send
          </button>
        )}
      </div>
    </form>
  );
};
