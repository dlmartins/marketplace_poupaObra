import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductOnHeader from '../ProductOnHeader';

test('renders Product component', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        price: 100,
        sale_price: 80,
        is_sale: true,
        images: [
            { url: 'image1.jpg' },
            { url: 'image2.jpg' },
            { url: 'image3.jpg' },
        ],
    };
    const mockStore = configureStore();
    const store = mockStore({});

   render(
        <Provider store={store}>
            <ProductOnHeader product={mockProduct} />
        </Provider>
    );
});
