import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductWideActions from '../ModuleProductWideActions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Criando um mock do store
const mockStore = configureStore([]);

test('renders ModuleProductWideActions component without crashing', () => {
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
            <ModuleProductWideActions product={mockProduct} />
        </Provider>
    );
});
