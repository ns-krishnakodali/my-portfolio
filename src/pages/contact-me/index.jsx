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
        <SectionHeading heading="Let's get in touch" />
        <h3 className="contact-me__message">Drop a message here</h3>
        <ContactMeForm displayNotification={displayNotification} />
        <LogoDetails />
      </div>
    </>
  );
};
