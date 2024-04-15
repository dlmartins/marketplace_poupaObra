import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductProgressbar from '../ModuleProductProgressbar';

test('renders ModuleProductProgressbar component without crashing', () => {
    const mockProduct = {
        inventory: 100,
        depot: 50,
    };

    // Renderizando o componente
    render(<ModuleProductProgressbar product={mockProduct} />);
});
