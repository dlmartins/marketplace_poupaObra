import React from 'react';
import { render } from '@testing-library/react';
import PartialSpecification from '../PartialSpecification';

describe('PartialSpecification', () => {
  it('should render without crashing', () => {
    render(<PartialSpecification />);
  });
});
