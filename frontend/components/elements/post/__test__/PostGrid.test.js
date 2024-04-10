import React from 'react';
import { render } from '@testing-library/react';
import PostGrid from '../PostGrid';

test('renders PostGrid component', () => {
    const post = {
        id: 1,
        thumbnail: {
            url: 'thumbnail-url.jpg',
        },
        post_categories: [],
        name: 'Post Title',
        created_at: '2024-03-06T12:00:00.000Z',
    };

    render(<PostGrid post={post} />);
});
