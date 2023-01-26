import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Container } from './App.styled'

export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    //const {good, neutral, bad} = e.target
    if (e === 'Good') {
      setGood(prevState => prevState + 1)
}
    else if (e === 'Neutral') {
      setNeutral(prevState => prevState + 1)
      }
    else if (e === 'Bad') {
      setBad(prevState => prevState + 1)
      };
  }

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    let positive = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return positive;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options = {['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
}


/*
export class OldApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    if (e === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };
  

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    let positive = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positive;
  };

  render() {
    
    //const total = this.countTotalFeedback();
    //const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
} */
