import React from 'react';
import { render } from '@testing-library/react';
import SkeletonProductDetail from '../SkeletonProductDetail';

test('renders SkeletonProductDetail component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonProductDetail />);
});
