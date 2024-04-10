import React from 'react';
import { render } from '@testing-library/react';
import PostAuthor from '../PostAuthor';

describe('PostAuthor', () => {
    it('renders without crashing', () => {
        render(<PostAuthor />);
    });
});
