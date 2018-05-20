import React, {Component} from 'react';

export default class FlightsView extends Component {

  onSubmit = e => {
    e.preventDefault()
    this.props.onSearch()
  }

  render() {
    return (<h1>flights</h1>)
  }
}
