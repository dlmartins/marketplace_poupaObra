import React from 'react';
import { render } from '@testing-library/react';
import PostDetailSidebar from '../PostDetailSidebar';

describe('PostDetailSidebar', () => {
    it('renders without crashing', () => {
        render(<PostDetailSidebar />);
    });
});
