import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders the page container', () => {
    render(<Home />);

    const pageContainer = screen.getByRole('main');
    expect(pageContainer).toBeInTheDocument();
  });
});