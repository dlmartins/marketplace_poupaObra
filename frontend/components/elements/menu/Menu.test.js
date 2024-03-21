import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('should render without crashing', () => {
    const source = [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      // Add more items as needed
    ];
    const className = 'menu';

    render(<Menu source={source} className={className} />);
  });
});
