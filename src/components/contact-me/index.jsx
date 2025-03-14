import './contact-me.css';

import { ContactMeForm } from './contact-me-form';

import { LogoDetails } from '../../shared-ui';

export const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1 className="contact-me__heading">Contact Me</h1>
      <h3 className="contact-me__message">Shoot your query here</h3>
      <ContactMeForm />
      <LogoDetails />
    </div>
  );
};
