import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CookiesProvider } from 'react-cookie';
import MasterLayout from './MasterLayout';

test('renders MasterLayout component', () => {
    const mockStore = configureStore();
    const store = mockStore({});

    render(
        <CookiesProvider>
            <Provider store={store}>
                <MasterLayout>
                    <div>Test Content</div>
                </MasterLayout>
            </Provider>
        </CookiesProvider>
    );
});
