import React, {Component} from 'react';
import SearchView from '../SearchView'
import FlightsView from '../FlightsView'

export default class App extends Component {
  state = {
    view: 'search'
  }
  onSearch = () => {
    this.setState({
      view: 'flights'
    })
  }
  render() {
    switch (this.state.view) {
      case 'search':
        return <SearchView onSearch={this.onSearch}/>
      case 'flights':
        return <FlightsView onSearch={this.onSearch}/>
      default:
        return <p>
          Ajc
        </p>
    }
  }
}
