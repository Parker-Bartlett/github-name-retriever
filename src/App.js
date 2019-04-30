import React, { Component } from 'react';
import Search from './components/Search'
import RepositoryList from './components/RepositoryList'

import axios from 'axios'
import './App.css';


class App extends Component {
  state = {
    repos: undefined
  }

  searchOrginization = (orginization) => {
    axios.get(`https://api.github.com/orgs/${orginization}/repos`).then(res => this.setState({ repos: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Search searchOrginization={this.searchOrginization} />
        {this.state.repos && <RepositoryList repos={this.state.repos} />}
      </div>
    );
  }
 
}

export default App;
