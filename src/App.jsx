import { useState } from 'react';
import FeedbackBtn from './components/Feedback/FeedbackBtn/FeedbackBtn';
import FeedbackStats from './components/Feedback/FeedbackStats/FeedbackStats';
import Section from 'components/Feedback/Section/Section';
import Notification from 'components/Feedback/Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = propertyName => {
    setState(prevState => {
      return {
        ...prevState,
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  const { good, neutral, bad } = state;
  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = propertyName => {
    if (!countTotalFeedback) {
      return 0;
    }
    const overall = countTotalFeedback;
    // const result = (overall / countTotalFeedback) * 100;
    return Math.round((good / overall) * 100);
  };
  const positivePercent = countPositiveFeedbackPercentage('good');

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackBtn>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <FeedbackStats
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercent}
          ></FeedbackStats>
        ) : (
          <Notification title="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
