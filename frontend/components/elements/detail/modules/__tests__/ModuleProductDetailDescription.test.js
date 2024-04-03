import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductDetailDescription from '../ModuleProductDetailDescription';

describe('ModuleProductDetailDescription', () => {
    it('should render without crashing', () => {
        const product = {
            title: 'Product Title',
            vendor: 'Vendor Name',
            price: 100,
            is_sale: false, 
            sale_price: 80, 
        }
        render(<ModuleProductDetailDescription product={product}/>);
    });
});
