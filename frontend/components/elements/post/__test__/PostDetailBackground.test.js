import React from 'react';
import { render } from '@testing-library/react';
import PostDetailBackground from '../PostDetailBackground';

describe('PostDetailBackground', () => {
    it('renders without crashing', () => {
        render(<PostDetailBackground />);
    });
});
