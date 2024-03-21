import React from 'react';
import { render } from '@testing-library/react';
import MegaMenu from './MegaMenu';

describe('MegaMenu', () => {
  it('should render without crashing', () => {
    const source = {
      text: 'Mega Menu',
      url: '/mega-menu',
      icon: 'icon-mega-menu',
      megaContent: [
        {
          heading: 'Column 1',
          megaItems: [
            { text: 'Item 1', url: '/item-1' },
            { text: 'Item 2', url: '/item-2' },
            // Add more mega items as needed
          ],
        },
        // Add more mega content columns as needed
      ],
    };

    render(<MegaMenu source={source} />);
  });
});
