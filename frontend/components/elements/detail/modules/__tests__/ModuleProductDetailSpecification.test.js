import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductDetailSpecification from '../ModuleProductDetailSpecification';

describe('ModuleProductDetailSpecification', () => {
    it('should render without crashing', () => {
        render(<ModuleProductDetailSpecification />);
    });
});
