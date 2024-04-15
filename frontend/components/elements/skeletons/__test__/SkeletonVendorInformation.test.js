import React from 'react';
import { render } from '@testing-library/react';
import SkeletonVendorInformation from '../SkeletonVendorInformation';

test('renders SkeletonVendorInformation component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonVendorInformation />);
});
