import React from 'react';
import { render } from '@testing-library/react';
import SkeletonPostGrid from '../SkeletonPostGrid';

test('renders SkeletonPostGrid component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonPostGrid />);
});
