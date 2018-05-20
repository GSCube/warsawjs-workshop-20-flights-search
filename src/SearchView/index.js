import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';

const Label = styled.label`
  margin: 10px;
  font-size: 1.5em;
  text-align: center;
`;

const CenteredButton = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  text-align: center;
`;


class SearchView extends Component {

  state = {
    from: "LON",
    to: "WAW",
    departTime: "2018-10-12",
    arrivalTime: "2018-12-12"
  };

  onFormChange = path => e => {
    this.setState({[path]: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSearch(this.state)
  }

  render() {
    const {to, from, departTime, arrivalTime} = this.state

    return (
      <form onSubmit={this.onSubmit}>
      <Label>From</Label>
      <select value={from} onChange={this.onFormChange('from')}>
        <option>WAW</option>
        <option>LON</option>
      </select>

      <Label>To</Label>
      <select value={to} onChange={this.onFormChange('to')}>
        <option>WAW</option>
        <option>LON</option>
      </select>

      <Label>Depart Date</Label>
      <Input type="date" value={departTime} onChange={this.onFormChange('departTime')}/>

      <Label>Return Date</Label>
      <Input type="date" value={arrivalTime} onChange={this.onFormChange('arrivalTime')}/>
      <CenteredButton>
        <Button className="centered-button" type="submit" variant="raised" color="primary">Search</Button>
      </CenteredButton>
    </form>)
  }
}

export default SearchView;
