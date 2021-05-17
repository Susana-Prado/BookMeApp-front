import './Calendar.css';
import React, { Component } from 'react'
import SimpleReactCalendar from 'simple-react-calendar'

export default class Calendar extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}

