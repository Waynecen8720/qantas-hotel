import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page';
import { PriceSorter } from '../Components';
import { Sort } from '../utils/eumns';

describe('Home', () => {
  it('render the page', () => {
    render(<Home />);
    const pageContainer = screen.getByRole('main');
    expect(pageContainer).toBeInTheDocument();
    const headerContainer = screen.getByRole('header');
    expect(headerContainer).toBeInTheDocument();
  });
});

describe('PriceSorter Component', () => {
  it('renders PriceSorter component', () => {
    const mockOnPriceSorterChange = jest.fn();
    render(<PriceSorter priceSorter={Sort.asc} onPriceSorterChange={mockOnPriceSorterChange} />);
    
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Price low-high')).toBeInTheDocument();
  });

  it('calls onPriceSorterChange when a different option is selected', () => {
    const mockOnPriceSorterChange = jest.fn();
    render(<PriceSorter priceSorter={Sort.asc} onPriceSorterChange={mockOnPriceSorterChange} />);
    
    const selectElement = screen.getByRole('selector') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: Sort.des } });
    
    expect(mockOnPriceSorterChange).toHaveBeenCalledWith(Sort.des);
  });
});