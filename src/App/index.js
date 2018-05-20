import React, {Component} from 'react';
import SearchView from '../SearchView'
import FlightsView from '../FlightsView'

export default class App extends Component {
  state = {
    view: 'search',
    airports: []
  }

  async componentDidMount() {
    const url = 'https://warsawjs-flights-api.herokuapp.com/airports'
    const result = await fetch(url)
    const airports  = (await result.json()).map(airport =>
       (
         {
          id: airport.id,
          code: airport.code
         }
       )
     )
    this.setState({
      airports
    })
  }

  onSearch = (searchData) => {
    this.setState({
      view: 'flights',
      searchData
    })
  }
  onReturn = () => {
    this.setState({
      view: 'search',
    })
  }


  render() {
    const { view, searchData, airports } = this.state
    switch (this.state.view) {
      case 'search':
        return <SearchView airports={airports} onSearch={this.onSearch}/>
      case 'flights':
        return <FlightsView searchData={searchData} onReturn={this.onReturn}/>
      default:
        return <p>
          Ajc
        </p>
    }
  }
}
