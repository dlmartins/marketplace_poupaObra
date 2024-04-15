import React from 'react';
import { render } from '@testing-library/react';
import SkeletonProductHorizontal from '../SkeletonProductHorizontal';

test('renders SkeletonProductHorizontal component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonProductHorizontal />);
});
