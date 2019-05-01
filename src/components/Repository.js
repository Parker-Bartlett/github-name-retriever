import React, { Component } from 'react'

export const Repository = ({ repo }) => {
  // Is it necessary to test for errors?
  //if(!repo) return console.error;
  return (
    <div>
      <li style={repoStyle} data-testid="list-item">
        <a data-testid="repo-link" target='blank' href={repo.html_url}>{repo.name}</a>
        <p data-testid="watchers">Watchers: {repo.watchers}</p>
      </li>
    </div>
  );
};


const repoStyle = {
    listStyleType: 'none',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between'
}

export default Repository
