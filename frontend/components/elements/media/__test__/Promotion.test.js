import React from 'react';
import { render } from '@testing-library/react';
import Promotion from '../Promotion';

describe('Promotion', () => {
    it('renders without crashing with image', () => {
        const link = '/promotion';
        const image = {
            url: 'promotion-image.jpg',
        };

        render(<Promotion link={link} image={image} />);
    });

    it('renders without crashing without image', () => {
        const link = '/promotion';

        render(<Promotion link={link} />);
    });
});
