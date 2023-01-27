import PropTypes from 'prop-types'
import {Buttons,SectionButtons} from '../buttons/ButtonsStyle'
export const FeedbackOptions = ({options,onLeaveFeedback})=>{
  
 
    return(<SectionButtons>{
      options.map(keys =>{return <Buttons key={keys} name={keys} onClick={onLeaveFeedback}>{keys}</Buttons>})
    }</SectionButtons>)

    }

    FeedbackOptions.propTypes={
      options: PropTypes.arrayOf(
        PropTypes.string
      ),
      onLeaveFeedback:PropTypes.func,
    }