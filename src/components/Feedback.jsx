import PropTypes from 'prop-types';
import { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class Feedback extends Component{
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const result = (good / total) * 100;
        return Number(result.toFixed(2));

    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
        <>
        <Section title="Please leave feedback">
            <FeedbackOptions options={ this.state } onLeaveFeedback={this.onLeaveFeedback}/> 
        </Section>
        
                
        <Section title="Statistic">
            {!total ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
        </Section>
           
        </>
        )
    };
}