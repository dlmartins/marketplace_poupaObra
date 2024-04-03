import React from 'react';
import { render } from '@testing-library/react';
import PartialVendor from '../PartialVendor';

describe('PartialVendor', () => {
  it('should render without crashing', () => {
    render(<PartialVendor />);
  });
});
