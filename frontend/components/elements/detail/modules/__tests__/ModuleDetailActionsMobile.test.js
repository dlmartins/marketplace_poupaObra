import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ModuleDetailActionsMobile from '../ModuleDetailActionsMobile';
import configureStore from 'redux-mock-store'; // Importar o mockStore

describe('ModuleDetailActionsMobile', () => {
    const mockStore = configureStore(); // Criar uma instância de mockStore
    const store = mockStore({}); // Criar um store vazio

    it('should render without crashing', () => {
        const ecomerce = {
            cartItems: [
                { id: 1, title: 'Product 1', price: 10, quantity: 2 },
                { id: 2, title: 'Product 2', price: 15, quantity: 1 },
            ], // Pode definir qualquer valor de exemplo aqui
        };
        const product = {
            id: 1,
            title: 'Product 1',
            quantity: 2,
            price: 10,
        };

        render(
            <Provider store={store}>
                <ModuleDetailActionsMobile
                    ecomerce={ecomerce}
                    product={product}
                />
            </Provider>
        );
    });
});
