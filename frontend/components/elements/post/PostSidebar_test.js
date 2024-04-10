import React from 'react';
import { render } from '@testing-library/react';
import PostGrid from './PostGrid';

test('renders PostGrid component', () => {
    const postData = {
        id: 2,
        thumbnail: 'thumbnail-url.jpg',
        badge: 'badge-class',
        categories: [{ id: 1, text: 'Category 1' }, { id: 2, text: 'Category 2' }],
        title: 'Post Title',
    };

    render(<PostGrid data={postData} />);
});
