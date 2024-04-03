import React from 'react';
import { render } from '@testing-library/react';
import DescriptionBox from '../DescriptionBox';

describe('DescriptionBox', () => {
  it('should render without crashing', () => {
    render(<DescriptionBox />);
  });
});
