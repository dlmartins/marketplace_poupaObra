import React from 'react';
import { render } from '@testing-library/react';
import CustomPagination from './CustomPagination';

describe('CustomPagination', () => {
  it('should render without crashing', () => {
    render(<CustomPagination />);
  });
});
