import PropTypes from 'prop-types';
import s from './FeedbackStats.module.css';

const FeedbackStats = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <ul className={s.options}>
                <li className={s.list}>Good: {good}</li>
                <li className={s.list}>Neutral: {neutral}</li>
                <li className={s.list}>Bad: {bad}</li>
                <li className={s.list}>Total:{total}</li>
                <li className={s.list}>Positive feedback:{positivePercentage}%</li>
            </ul>
        </div>
    )
}

export default FeedbackStats;

FeedbackStats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    }