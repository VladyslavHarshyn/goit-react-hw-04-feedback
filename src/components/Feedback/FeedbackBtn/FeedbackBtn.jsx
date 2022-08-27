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
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
