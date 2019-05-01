import React from 'react';
import { render, cleanup } from 'react-testing-library';
import RepositoryList from '../components/RepositoryList'

afterEach(cleanup)

const repos = [
    {id: 1},
    {id: 2},
    {id: 3},
]
test('<RepositoryList> With Repos', () => {
    const { getByTestId, getAllByTestId, container } = render(<RepositoryList repos={repos} />)
    
    expect(getByTestId('header').innerHTML).toBe(`Public Repositories Retrieved: ${repos.length}`)
    expect(getAllByTestId('list-item').length).toBe(3);

    expect(container.firstChild).toMatchSnapshot();
})