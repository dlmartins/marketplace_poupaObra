import React from 'react';
import { render } from '@testing-library/react';
import PageLoader from './PageLoader';

describe('PageLoader', () => {
  it('should render without crashing', () => {
    render(<PageLoader />);
  });
});
