import React from 'react'
import PropTypes from 'prop-types';
import { Button, List, Item } from "./FeedbackOptions.styled"
export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const { good, neutral, bad } = options;
  return (
    <List>
        <Item><Button onClick={() => onLeaveFeedback(`good`)}>Good</Button></Item> 
        <Item><Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button></Item>    
        <Item><Button onClick={() => onLeaveFeedback('bad')}>Bad</Button></Item>
    </List>   
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number
    }),
    onLeaveFeedback: PropTypes.func
}
