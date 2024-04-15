import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Product from '../Product';

test('renders Product component', () => {
    const mockProduct = {
        id: 1,
        thumbnail: {
            url: 'thumbnail-url.jpg',
        },
        badge: [
            {
                type: 'sale',
                value: 'Sale',
            },
        ],
        price: 100,
        sale_price: 80,
        title: 'Product Title',
        brands: [
            {
                name: 'Brand Name',
            },
        ],
    };
    const mockStore = configureStore();
    const store = mockStore({});

   render(
        <Provider store={store}>
            <Product product={mockProduct} />
        </Provider>
    );
});
