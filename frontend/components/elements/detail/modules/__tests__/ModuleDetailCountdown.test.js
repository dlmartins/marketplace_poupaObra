import React from 'react';
import { render } from '@testing-library/react';
import ModuleDetailCountdown from '../ModuleDetailCountdown';

describe('ModuleDetailCountdown', () => {
    it('should render without crashing', () => {
        render(<ModuleDetailCountdown />);
    });
});
