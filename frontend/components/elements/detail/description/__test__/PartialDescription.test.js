import React from 'react';
import { render } from '@testing-library/react';
import PartialDescription from '../PartialDescription';

describe('PartialDescription', () => {
  it('should render without crashing', () => {
    render(<PartialDescription />);
  });
});
