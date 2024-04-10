import React from 'react';
import { render } from '@testing-library/react';
import PostDetail from '../PostDetail';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('PostDetail', () => {
    it('renders without crashing', () => {
        const mockStore = configureStore();
        const store = mockStore({});
        render(
            <Provider store={store}>
                <PostDetail />
            </Provider>
        );
    });
});
