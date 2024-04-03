import React from 'react';
import { render } from '@testing-library/react';
import ModuleDetailTopInformation from '../ModuleDetailTopInformation';

describe('ModuleDetailTopInformation', () => {
    it('should render without crashing', () => {
        const product = {
            title: 'Product Title',
            vendor: 'Vendor Name',
            price: 100,
            is_sale: false, // Defina de acordo com a lógica do seu componente
            sale_price: 80, // Defina de acordo com a lógica do seu componente
        };

        render(<ModuleDetailTopInformation product={product} />);
    });
});
