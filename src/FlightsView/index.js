import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Flight from './Flight';

export default class FlightsView extends Component {
  state = {
    flights: []
  }

  async componentDidMount() {
    const {from, to, departTime, arrivalTime} = this.props.searchData
    const url = 'https://warsawjs-flights-api.herokuapp.com/flights'
    const result = await fetch(`${url}/${departTime}/${arrivalTime}/${from}/${to}`)
    const flights  = await result.json()
    this.setState({flights})
  }

  goBack = () => {
    this.props.onReturn()
  }

  render() {
    return (
      <React.Fragment>
        <ul>
        {this.state.flights.map(
          flight => <Flight key={flight.id} flight={flight}></Flight>)
        }
        </ul>
        <Button onClick={this.goBack} type="submit" variant="raised" color="primary">Back</Button>
      </React.Fragment>
    )
  }
}
