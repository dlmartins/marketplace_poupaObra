import React from 'react';
import { render } from '@testing-library/react';
import ModulePaymentShipping from './ModulePaymentShipping';

describe('ModulePaymentShipping', () => {
  it('should render without crashing', () => {
    render(<ModulePaymentShipping />);
  });
});
