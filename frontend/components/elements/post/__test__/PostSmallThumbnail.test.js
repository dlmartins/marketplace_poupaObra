import React from 'react';
import { render } from '@testing-library/react';
import PostSmallThumbnail from '../PostSmallThumbnail';

test('renders PostSmallThumbnail component', () => {
    const postData = {
        id: 1,
        thumbnail: { url: 'thumbnail-url.jpg' },
        categories: [{ id: 1, name: 'Category 1', slug: 'category-1' }, { id: 2, name: 'Category 2', slug: 'category-2' }],
        title: 'Post Title',
        created_at: '2024-03-06T10:00:00Z',
    };

    render(<PostSmallThumbnail post={postData} />);
});
