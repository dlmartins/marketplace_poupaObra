import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('should render without crashing', () => {
    render(<Rating />);
  });
});
