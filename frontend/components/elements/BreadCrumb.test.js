import React from 'react';
import { render } from '@testing-library/react';
import BreadCrumb from './BreadCrumb';

describe('BreadCrumb', () => {
  it('should render without crashing', () => {
    const breacrumb = [
      { text: 'Home', url: '/' },
      { text: 'Products', url: '/products' },
      { text: 'Category', url: '/category' },
      { text: 'Product 1' },
    ];
    const layout = 'fullwidth';

    render(<BreadCrumb breacrumb={breacrumb} layout={layout} />);
  });
});
