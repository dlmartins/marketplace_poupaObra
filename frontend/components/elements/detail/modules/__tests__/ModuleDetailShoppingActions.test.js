import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ModuleDetailShoppingActions from '../ModuleDetailShoppingActions';
import configureStore from 'redux-mock-store'; // Importar o mockStore

describe('ModuleDetailShoppingActions', () => {
    it('should render without crashing', () => {
        const mockStore = configureStore(); // Criar uma instância de mockStore
        const store = mockStore({}); // Criar um store vazio
        const ecomerce = {
            cartItems: [],
            compareItems: [],
            wishlistItems: [],
        };
        const product = {
            id: 1,
            title: 'Product 1',
            quantity: 2,
            price: 10,
        };
        const extended = false;

        render(
            <Provider store={store}>
                <ModuleDetailShoppingActions
                    ecomerce={ecomerce}
                    product={product}
                    extended={extended}
                />
            </Provider>
        );
    });
});
