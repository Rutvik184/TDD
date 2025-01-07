import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('App Component with Input Handling', () => {
  it('renders correctly', async () => {
    const {getByPlaceholderText, getByText} = render(<App />);
    expect(getByPlaceholderText('Enter Here...')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });

  it('updates input value correctly', () => {
    const {getByPlaceholderText} = render(<App />);
    const input = getByPlaceholderText('Enter Here...');
    fireEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });
});
