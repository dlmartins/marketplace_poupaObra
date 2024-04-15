import React from 'react';
import { render } from '@testing-library/react';
import SkeletonSinglePost from '../SkeletonSinglePost';

test('renders SkeletonSinglePost component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonSinglePost />);
});
