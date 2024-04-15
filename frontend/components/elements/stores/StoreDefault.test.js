import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StoreDefault from './StoreDefault';

test('renders Product component', () => {
    const mockSource = {
        slug: 'store-slug',
        name: 'Store Name',
        address: 'Store Address',
        phone: '123-456-7890',
    };
    
    const mockStore = configureStore();
    const store = mockStore({});

    render(
        <Provider store={store}>
            <StoreDefault source={mockSource} />
        </Provider>
    );
});
