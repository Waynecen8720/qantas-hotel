import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import mockData from '../../public/data.json';
import Home from '../app/page';
import { PriceSorter, HotelsInfo } from '../Components';
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

describe('HotelsInfo', () => {
  it('renders hotel information correctly', () => {
    render(<HotelsInfo hotelsData={mockData.results} />);

    expect(screen.getByRole('hotels-info')).toBeInTheDocument();

    mockData.results.forEach(hotel => {
      expect(screen.getByText(hotel.property.title)).toBeInTheDocument();
      expect(screen.getByText(hotel.property.address.join(', '))).toBeInTheDocument();
      expect(screen.getByAltText(hotel.property.previewImage.caption)).toBeInTheDocument();
      if (hotel.offer.promotion) {
        const promotionElements = screen.getAllByText(hotel.offer.promotion.title);
        expect(promotionElements.length).toBeGreaterThan(0);
        expect(promotionElements[0]).toBeInTheDocument();
      }
      if (hotel.offer.cancellationOption.cancellationType === 'Cancellation') {
        expect(screen.getByText('Free cancellation')).toBeInTheDocument();
      }
    });
  });
});