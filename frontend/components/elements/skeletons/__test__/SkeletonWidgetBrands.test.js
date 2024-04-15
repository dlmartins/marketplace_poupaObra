import React from 'react';
import { render } from '@testing-library/react';
import SkeletonWidgetBrands from '../SkeletonWidgetBrands';

test('renders SkeletonWidgetBrands component without crashing', () => {
    // Renderizando o componente
    render(<SkeletonWidgetBrands />);
});
