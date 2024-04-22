import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CookiesProvider } from 'react-cookie';
import PageContainer from './PageContainer';

// Mock do componente HeaderActions
jest.mock('../../components/shared/headers/HeaderActions', () => {
    return {
        __esModule: true,
        default: () => <div>HeaderActions Component</div>,
    };
});

test('renders PageContainer component', () => {
    const mockStore = configureStore();
    const store = mockStore({
        ecomerce: {
            compareItems: [],
            wishlistItems: [],
        },
        auth: {
            isLoggedIn: true,
        },
    });

    render(
        <CookiesProvider>
            <Provider store={store}>
                <PageContainer title="Test Page">
                    <div>Test Content</div>
                </PageContainer>
            </Provider>
        </CookiesProvider>
    );
});
