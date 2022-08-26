import PropTypes from 'prop-types';
import s from './Notification.module.css'

const Notification = ({ message }) => {
  return <div className={s.note}>{message}</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};