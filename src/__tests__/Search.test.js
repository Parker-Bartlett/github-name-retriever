import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Search from '../components/Search'

afterEach(cleanup)

const searchOrginization = jest.fn();

test('<Search>', () => {
    const { debug, getByTestId } = render(<Search searchOrginization={searchOrginization}/>)

    expect(getByTestId('form')).toBeTruthy();

    const input = getByTestId('input')
    input.value = 'ScriptDrop'
    fireEvent.change(input)

    fireEvent.click(getByTestId('button'))

    expect(searchOrginization).toHaveBeenCalledTimes(1);
    // Working in application yet failing here
    expect(searchOrginization).toHaveBeenCalledWith('ScriptDrop')
})