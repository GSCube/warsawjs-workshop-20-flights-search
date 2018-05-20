import React, {Component} from 'react';
import SearchView from '../SearchView'
import FlightsView from '../FlightsView'

export default class App extends Component {
  state = {
    view: 'search'
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
    const { view, searchData } = this.state
    switch (this.state.view) {
      case 'search':
        return <SearchView onSearch={this.onSearch}/>
      case 'flights':
        return <FlightsView searchData={searchData} onReturn={this.onReturn}/>
      default:
        return <p>
          Ajc
        </p>
    }
  }
}
