import React from 'react';
import { render } from '@testing-library/react';
import DefaultDescription from '../DefaultDescription';

describe('DefaultDescription', () => {
  it('should render without crashing', () => {
    render(<DefaultDescription />);
  });
});
