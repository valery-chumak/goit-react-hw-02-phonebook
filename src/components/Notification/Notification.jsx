import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './Notification.styled'
export default function Notification({message}) {
  return (
      <Container>{ message }</Container>
  )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired
}
