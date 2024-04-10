import React from 'react';
import { render } from '@testing-library/react';
import RecommendProducts from '../RecommendProducts';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('RecommendProducts', () => {
    it('renders without crashing', () => {
        const mockStore = configureStore();
        const store = mockStore({});
        render(
            <Provider store={store}>
                <RecommendProducts />
            </Provider>
        );
    });
});
