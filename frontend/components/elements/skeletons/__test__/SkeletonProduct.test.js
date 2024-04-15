import React from 'react';
import { render } from '@testing-library/react';
import SkeletonProduct from '../SkeletonProduct';

test('renders SkeletonProduct component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonProduct />);
});
