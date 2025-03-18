import './contact-me.css';

import { ContactMeForm } from './contact-me-form';

import { LogoDetails } from '../../shared-ui';

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1 className="contact-me__heading">Let's get in touch</h1>
      <h3 className="contact-me__message">Drop a message here</h3>
      <ContactMeForm />
      <LogoDetails />
    </div>
  );
};
