import React, { Component } from 'react'

export class Search extends Component {
  state = {
    orginization: ''
  }

 onChange = (event) => this.setState({ orginization: event.target.value })

  onSubmit = (event) => {
      event.preventDefault();
      this.props.searchOrginization(this.state.orginization);
      this.setState({ orginization: '' })
  }

  render() {
    return (
      <form data-testid="form" onSubmit={this.onSubmit} style={formStyle}>
          <input 
            data-testid="input"
            type="text" 
            name="title" 
            placeholder="Search Orginization..." 
            //value={this.state.orginization}
            onChange={this.onChange} 
            style={searchBarStyle}/>
          <input
            data-testid="button" 
            type="submit" 
            value="Get Repos"
            style={buttonStyle}/>
      </form>
    )
  }
}

const formStyle = {
    paddingTop: '150px'
}

const searchBarStyle = {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '90%',
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    border: '1px solid black'
}

const buttonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    fontWeight: 'bold',
    border: '1px solid black',
    borderRadius: '10px'
}

export default Search