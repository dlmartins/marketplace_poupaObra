import React from 'react';
import { render } from '@testing-library/react';
import PrevArrow from './PrevArrow';

describe('PrevArrow', () => {
  it('should render without crashing', () => {
    render(<PrevArrow />);
  });
});
