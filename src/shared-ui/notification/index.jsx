import './notification.css';
import cx from 'classnames';

import { useEffect, useState } from 'react';

export const Notification = ({ type, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible || !text) return <></>;

  return (
    <div className={cx('notification-container', `notification-${type}`)} role="alert">
      <p className="notification__text">{text}</p>
    </div>
  );
};
