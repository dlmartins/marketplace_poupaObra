import React from 'react';
import { render } from '@testing-library/react';
import ProductDetailImageSwatches from './ProductDetailImageSwatches';

describe('ProductDetailImageSwatches', () => {
    it('renders without crashing', () => {
        const imageSwatcher = {
            variants: [
                {
                    id: 1,
                    title: 'Variant 1',
                    thumbnail: [
                        { id: 1, image: '/path/to/image1.jpg' },
                        { id: 2, image: '/path/to/image2.jpg' },
                    ],
                },
                // Adicione mais variantes conforme necessário
            ],
            price: 100, // Adicione o preço conforme necessário
        };

        render(<ProductDetailImageSwatches imageSwatcher={imageSwatcher} />);
    });
});
