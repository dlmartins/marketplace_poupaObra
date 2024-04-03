import React from 'react';
import { render } from '@testing-library/react';
import ModuleDetailProductGroup from '../ModuleDetailProductGroup';

describe('ModuleDetailProductGroup', () => {
    it('should render without crashing', () => {
        render(<ModuleDetailProductGroup />);
    });
});
