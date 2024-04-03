import React from 'react';
import { render } from '@testing-library/react';
import ModuleProductDetailSharing from '../ModuleProductDetailSharing';

describe('ModuleProductDetailSharing', () => {
    it('should render without crashing', () => {
        render(<ModuleProductDetailSharing />);
    });
});
