import React from 'react';
import { render } from '@testing-library/react';
import DescriptionFullContent from '../DescriptionFullContent';

describe('DescriptionFullContent', () => {
  it('should render without crashing', () => {
    render(<DescriptionFullContent />);
  });
});
