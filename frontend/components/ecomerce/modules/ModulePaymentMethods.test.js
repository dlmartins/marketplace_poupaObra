import React from 'react';
import { render } from '@testing-library/react';
import ModulePaymentMethods from './ModulePaymentMethods';

describe('ModulePaymentMethods', () => {
  it('should render without crashing', () => {
    render(<ModulePaymentMethods />);
  });
});
