import React from 'react';
import { render } from '@testing-library/react';
import SkeletonVendor from '../SkeletonVendor';

test('renders SkeletonVendor component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonVendor />);
});
