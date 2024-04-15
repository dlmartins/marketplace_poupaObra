import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductActions from '../ModuleProductActions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Criando um mock do store
const mockStore = configureStore([]);

test('renders ModuleProductActions component without crashing', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        price: 100,
    };

    const initialState = {
        ecomerce: {
            cartItems: [],
            wishlistItems: [],
            compareItems: [],
        },
    };

    const store = mockStore(initialState);

    // Renderizando o componente
    render(
        <Provider store={store}>
            <ModuleProductActions product={mockProduct} />
        </Provider>
    );
});
