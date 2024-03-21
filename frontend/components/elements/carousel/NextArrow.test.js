import React from 'react';
import { render } from '@testing-library/react';
import NextArrow from './NextArrow';

describe('NextArrow', () => {
  it('should render without crashing', () => {
    render(<NextArrow />);
  });
});
