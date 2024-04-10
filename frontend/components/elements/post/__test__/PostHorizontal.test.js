import React from 'react';
import { render } from '@testing-library/react';
import PostHorizontal from '../PostHorizontal';

test('renders PostHorizontal component', () => {
    const postData = {
        id: 1,
        thumbnail: 'thumbnail-url.jpg',
        badge: 'badge-class',
        categories: [{ id: 1, text: 'Category 1' }, { id: 2, text: 'Category 2' }],
        title: 'Post Title',
    };

    render(<PostHorizontal data={postData} />);
});
