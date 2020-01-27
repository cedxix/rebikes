import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FlagItem from './FlagItem';

describe('<FlagItem />', () => {
  const defaultProps = {
    isActive: false,
    onSelect: () => {},
    countryCode: 'CA',
  };

  describe('Given the component is mounted', () => {
    test('It should render properly', () => {
      const { getByTestId } = render(<FlagItem {...defaultProps} />);
      expect(getByTestId(/CA/gi).firstChild).toBeTruthy();
    });
  });

  describe('Given I click on FlagItem', () => {
    const props = {
      ...defaultProps,
      onSelect: jest.fn(),
    };

    test('Should trigger onSelect', () => {
      const { getByTestId } = render(<FlagItem {...props} />);
      fireEvent.click(getByTestId(/CA/gi));
      expect(props.onSelect).toHaveBeenCalledWith('CA');
    });
  });
  describe('Given FlagItem isActive', () => {
    const props = {
      ...defaultProps,
      isActive: true,
    };

    test('Should trigger onSelect', () => {
      const { getByTestId } = render(<FlagItem {...props} />);
      expect(getByTestId(/CA/gi)).toHaveClass('active');
    });
  });
});
