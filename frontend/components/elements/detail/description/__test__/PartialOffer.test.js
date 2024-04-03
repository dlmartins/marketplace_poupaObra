import React from 'react';
import { render } from '@testing-library/react';
import PartialOffer from '../PartialOffer';

describe('PartialOffer', () => {
  it('should render without crashing', () => {
    render(<PartialOffer />);
  });
});
