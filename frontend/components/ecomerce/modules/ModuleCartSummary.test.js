import React from 'react';
import { render, screen } from '@testing-library/react';
import ModuleCartSummary from './ModuleCartSummary';
import { calculateAmount } from '../../../utilities/ecomerce-helpers';
import { getByTextIgnoreWrapper } from '../../../utilities/tests-helpers';

describe('ModuleCartSummary', () => {
    it('should render without crashing', () => {
        render(
            <ModuleCartSummary
                source={[{ id: 1, title: 'Product 1', quantity: 2 }]}
            />
        );
    });

    it('should calculate the correct amount', () => {
        const source = [
            { id: 1, title: 'Product 1', quantity: 2, price: 10 },
            { id: 2, title: 'Product 2', quantity: 1, price: 20 },
            { id: 3, title: 'Product 3', quantity: 5, price: 5 },
        ];

        const amount = calculateAmount(source);

        expect(amount).toBeDefined();
        expect(typeof amount).toBe('string');
        expect(amount).toBe('65.00');
    });

    it('should display correct product title and quantity', () => {
      const { container } = render(<ModuleCartSummary source={[{ id: 1, title: 'product1', quantity: 2, price: 5 }]} />);
      // expect(screen.getByText(/product1/i)).toBeInTheDocument();
      const element1 = getByTextIgnoreWrapper(container, '2');
      const element2 = getByTextIgnoreWrapper(container, 'product1');
      expect(element1.textContent).toBe('2');
      expect(element2.textContent).toBe('product1');
    });
});
