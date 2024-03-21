import React from 'react';
import { render } from '@testing-library/react';
import CountDownSimple from './CountDownSimple';

describe('CountDownSimple', () => {
  it('should render without crashing', () => {
    const timeTillDate = '2024-12-31T23:59:59'; // Data fictícia para o countdown
    const timeFormat = 'YYYY-MM-DDTHH:mm:ss'; // Formato da data fictícia
    render(<CountDownSimple timeTillDate={timeTillDate} timeFormat={timeFormat} />);
  });
});
