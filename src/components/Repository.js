import React, { Component } from 'react'

export class Repository extends Component {
  render() {
    return (
      <div>
        <li style={repo}>
          <a target='blank' href={this.props.repo.html_url}>{this.props.repo.name}</a>
          <p>Watchers: {this.props.repo.watchers}</p>
        </li>
      </div>
    )
  }
}

const repo = {
    listStyleType: 'none',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between'
}

export default Repository
