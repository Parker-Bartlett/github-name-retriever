import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Repository from '../components/Repository'

afterEach(() => {
    cleanup();
    //console.error.mockClear();
})

// Is it necessary to test for errors?

// console.error = jest.fn();

// test('<Search>', () => {
//     render(<Repository />)
//     expect(console.error).toBeCalled();
// })

const repo = {
    html_url: 'mock/url',
    name: 'mock name',
    watchers: '5'
}
test('<Search> With Repo', () => {
    const { getByTestId } = render(<Repository repo={repo} />)
    //expect(console.error).not.toHaveBeenCalled();
    
    expect(getByTestId('list-item')).toBeTruthy();
    expect(getByTestId('repo-link').getAttribute('href')).toBe(repo.html_url)
    expect(getByTestId('repo-link').innerHTML).toBe(repo.name);
    expect(getByTestId('watchers').innerHTML).toBe(`Watchers: ${repo.watchers}`)
})