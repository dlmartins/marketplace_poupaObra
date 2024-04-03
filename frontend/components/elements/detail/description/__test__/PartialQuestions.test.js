import React from 'react';
import { render } from '@testing-library/react';
import PartialQuestions from '../PartialQuestions';

describe('PartialQuestions', () => {
  it('should render without crashing', () => {
    render(<PartialQuestions />);
  });
});
