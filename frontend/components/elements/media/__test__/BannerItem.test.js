import React from 'react';
import { render } from '@testing-library/react';
import BannerItem from '../BannerItem';

describe('BannerItem', () => {
    it('renders without crashing', () => {
        const source = {
            image: {
                url: 'banner-image.jpg',
            },
        };

        render(<BannerItem source={source} />);
    });
});
