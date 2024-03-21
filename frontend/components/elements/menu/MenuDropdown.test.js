import React from 'react';
import { render } from '@testing-library/react';
import MenuDropdown from './MenuDropdown';

describe('MenuDropdown', () => {
  it('should render without crashing', () => {
    const source = {
      text: 'Dropdown',
      url: '/dropdown',
      subMenu: [
        { text: 'Submenu Item 1', url: '/submenu-1' },
        { text: 'Submenu Item 2', url: '/submenu-2' },
        // Add more submenu items as needed
      ],
      subClass: 'submenu',
    };

    render(<MenuDropdown source={source} />);
  });
});
