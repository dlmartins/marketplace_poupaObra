import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ModuleProductHasVariants from '../ModuleProductHasVariants';

describe('ModuleProductHasVariants', () => {
    it('should render without crashing', () => {
        const mockStore = configureStore();
        const store = mockStore({});
        const ecomerce = {
            cartItems: [
                { id: 1, title: 'Product 1', price: 10, quantity: 2 },
                { id: 2, title: 'Product 2', price: 15, quantity: 1 },
            ],
            compareItems: [
                { id: 1, title: 'Product 1', price: 10, quantity: 2 },
                { id: 2, title: 'Product 2', price: 15, quantity: 1 },
            ],
            wishlistItems: [
                { id: 1, title: 'Product 1', price: 10, quantity: 2 },
            ],
        };
        const currency = {
            symbol: '$',
        };
        const product = {
            title: 'Product Title',
            vendor: 'Vendor Name',
            price: 100,
            is_sale: false,
            sale_price: 80,
            images: [
                { id: 1, url: '/path/to/image1.jpg', alt: 'Image 1' },
                { id: 2, url: '/path/to/image2.jpg', alt: 'Image 2' },
            ],
            variants: [
                {
                    id: 1,
                    name: 'Variant 1',
                    thumbnail: {
                        url: '/path/to/thumbnail',
                    },
                    is_sale: false,
                    price: 100,
                    sale_price: 80,
                    sizes: [
                        {
                            id: 1,
                            name: 'Size 1',
                            character: 'S',
                        },
                    ],
                },
            ],
        };

        render(
            <Provider store={store}>
                <ModuleProductHasVariants
                    ecomerce={ecomerce}
                    currency={currency}
                    product={product}
                />
            </Provider>
        );
    });
});
