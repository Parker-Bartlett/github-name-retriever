import React, { Component } from 'react';
import Repository from './Repository'

class Search extends Component {
  
  render() {
    return (
      <div style={repoList}>
        <h3 data-testid="header">Public Repositories Retrieved: {this.props.repos.length}</h3>
        <ul>
          {this.props.repos.map(repo => (
            <Repository key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    )
  }
}

const repoList = {
  margin: '10px auto',
  padding: '10px',
  width: '90%',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  border: '1px solid black'
} 

export default Search;
