import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Container} from '../Statistics/StatisticsStyle'
class Statistics extends Component {
  
  
    render() {
      // const total= this.props.statistic.good + this.props.statistic.neutral + this.props.statistic.bad
      // const proc = (this.props.statistic.good*100)/total
      return(<Container>
        

       
       
       <p>Good:{this.props.good}</p>
       <p>Neutral:{this.props.neutral}</p>
       <p>Bad:{this.props.bad}</p>
       <p>Total:{this.props.total}</p>
       <p>Positive Feedback:{isNaN(this.props.positivePercentage)? 0:this.props.positivePercentage}%</p>
      
      </Container>)
      
    }
  }
  export default Statistics;
  Statistics.propTypes={
    good: PropTypes.number,
    neutral:PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }