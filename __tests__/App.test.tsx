import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('App Component with Input Handling', () => {
  it('renders correctly', async () => {
    const {getByPlaceholderText, getByText, queryByTestId, getByTestId} =
      render(<App />);
    expect(getByPlaceholderText('Enter Here...')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
    expect(queryByTestId('result')).toBeNull();
  });

  it('updates input value correctly', () => {
    const {getByPlaceholderText} = render(<App />);
    const input = getByPlaceholderText('Enter Here...');
    fireEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });

  it('calculates positive sum correctly', () => {
    const {getByPlaceholderText, getByText, getByTestId} = render(<App />);
    const input = getByPlaceholderText('Enter Here...');
    const button = getByText('Submit');

    fireEvent.changeText(input, '123');
    fireEvent.press(button);

    expect(getByTestId('result')).toBeTruthy();
    expect(getByTestId('result').children.join('')).toBe('Result: 6');
  });

  it('displays error for final negative result', () => {
    const {getByPlaceholderText, getByText, getByTestId} = render(<App />);
    const input = getByPlaceholderText('Enter Here...');
    const button = getByText('Submit');

    fireEvent.changeText(input, '-1\n:2-!-3:;');
    fireEvent.press(button);

    expect(getByTestId('result').children.join('')).toBe(
      `Error: Nagative number is not allowed (-1, -3)`,
    );
  });

  it('handles mixed input with non-numeric characters', () => {
    const {getByPlaceholderText, getByText, getByTestId} = render(<App />);
    const input = getByPlaceholderText('Enter Here...');
    const button = getByText('Submit');

    fireEvent.changeText(input, '1\\;\\a-;2b3@1#!');
    fireEvent.press(button);

    expect(getByTestId('result').children.join('')).toBe(
      `Result: 7`,
    );
  });

  it('ignores empty input without crashing', () => {
    const {getByText, getByTestId} = render(<App />);
    const button = getByText('Submit');

    fireEvent.press(button);

    expect(getByTestId('result').children.join('')).toBe('Result: 0');
  });
});
