import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ModuleDetailShoppingActionsSidebar from '../ModuleDetailShoppingActionsSidebar';

describe('ModuleDetailShoppingActionsSidebar', () => {
    it('should render without crashing', () => {
        const mockStore = configureStore(); // Criar uma instância de mockStore
        const store = mockStore({}); // Criar um store vazio
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
        const product = {
            id: 1,
            title: 'Product 1',
            quantity: 2,
            price: 10,
        };

        render(
            <Provider store={store}>
                <ModuleDetailShoppingActionsSidebar
                    ecomerce={ecomerce}
                    product={product}
                />
            </Provider>
        );
    });
});
