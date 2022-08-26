import { Component } from "react";
import FeedbackBtn from "./components/Feedback/FeedbackBtn/FeedbackBtn";
import FeedbackStats from "./components/Feedback/FeedbackStats/FeedbackStats";
import Section from "components/Feedback/Section/Section";
import Notification from "components/Feedback/Notification/Notification";

class App extends Component {

    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }
  
   
  setVote = vote => {
        this.setState(prevState => {
            return {
                [vote]: prevState[vote] + 1
            }
        })
  }
    
     countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
  
    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const total = this.countTotalFeedback();

    if (total === 0) {
      return 0
    } else {
      return Math.round((good / total) * 100);
    }
    }
  
    render() {
      
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

   return (
            <>
           <Section title="Please leave feedback">
               
               <FeedbackBtn
          options={Object.keys(this.state)}
          onLeaveFeedback={this.setVote}
               ></FeedbackBtn>
               
           </Section>
           
      <Section title="Statistics">
        {!Boolean(total) && <Notification message="There is no feedback"></Notification>}
        {Boolean(total) && <FeedbackStats
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></FeedbackStats>}
        </Section>
            </>
        )
  }
  
}

export default App