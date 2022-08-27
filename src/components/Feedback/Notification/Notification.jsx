import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={s.note}>{message}</div>;
};

// задал дефолтное значение ибо ругается что propTypes стоят правильно, а само значение undefined...

Notification.defaultProps = {
  message: 'There is no available data',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
