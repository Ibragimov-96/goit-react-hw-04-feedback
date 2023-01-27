import React, { Component } from 'react';
// import Title from '../components/Title/Title';
import { FeedbackOptions } from '../components/buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Sections from './Sections/Sections';
import {Notification} from './Notification/Notification'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clic = event => {
    const key = event.target.name;
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
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
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positiveFeedback = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
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
            onLeaveFeedback={this.clic}
          />
        </Sections>

        {/* <Button clickGood={this.clickGood} clickNeutral={this.clickNeutral} clickBad={this.clickBad}/> */}
        <Sections title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positiveFeedback()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Sections>

        {/* <Statistics statistic={this.state} total={this.countTotalFeedback()}positive={this.positiveFeedback()}/> */}
      </div>
    );
  }
}
