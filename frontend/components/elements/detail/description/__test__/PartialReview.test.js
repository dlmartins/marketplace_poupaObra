import React from 'react';
import { render } from '@testing-library/react';
import PartialReview from '../PartialReview';

describe('PartialReview', () => {
  it('should render without crashing', () => {
    render(<PartialReview />);
  });
});
