import PropTypes from 'prop-types';
import s from './FeedbackBtn.module.css';

const FeedbackBtn = ({ options, onLeaveFeedback }) => {
  const item = options.map(el => (
    <li key={el} className={s.list}>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback(`${el}`)}
      >
        {el}
      </button>
    </li>
  ));

  return <ul className={s.list}>{item}</ul>;
};

export default FeedbackBtn;

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
