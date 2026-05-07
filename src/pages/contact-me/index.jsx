import './contact-me.css';

import { useState } from 'react';

import { ContactMeForm } from './contact-me-form';

import { LogoDetails, Notification, SectionHeading } from '../../shared-ui';

export const ContactMe = () => {
  const [notification, setNotification] = useState({});

  const displayNotification = (type, text) => {
    setNotification({ type: '', text: '' });

    setTimeout(() => {
      setNotification({ type, text });
    }, 10);
  };

  return (
    <>
      {notification?.text && <Notification {...notification} />}
      <div className="contact-me">
        <div className="contact-me__content">
          <SectionHeading heading="Let's get in touch" />
          <ContactMeForm displayNotification={displayNotification} />
          <LogoDetails />
        </div>
      </div>
    </>
  );
};
