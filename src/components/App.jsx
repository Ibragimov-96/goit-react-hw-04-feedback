import React, { useState } from 'react';
// import Title from '../components/Title/Title';
import { FeedbackOptions } from '../components/buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Sections from './Sections/Sections';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const click = event => {
    const { name} = event.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'good':
        setGood(state=>state + 1);
        break;

      case 'neutral':
        // eslint-disable-next-line no-lone-blocks
        {
          setNeutral(state =>state + 1);
        }
        break;
      case 'bad':
        // eslint-disable-next-line no-lone-blocks
        {
          setBad(state => state + 1);
        }
        break;
    }
  };

  // clickGood =()=>{

  //   return this.setState((prevState)=>{return{good:prevState.good +1}})
  // }
  // clickNeutral =()=>{

  //   return this.setState((prevState)=>{return{neutral:prevState.neutral +1}})
  // }
  // clickBad =()=>{

  //   return this.setState((prevState)=>{return{bad:prevState.bad +1}})
  // }
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const positiveFeedback = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div
      style={{
        marginTop: '150px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={click}
        />
      </Sections>

      {/* <Button clickGood={this.clickGood} clickNeutral={this.clickNeutral} clickBad={this.clickBad}/> */}
      <Sections title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedback()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>

      {/* <Statistics statistic={this.state} total={this.countTotalFeedback()}positive={this.positiveFeedback()}/> */}
    </div>
  );
};
