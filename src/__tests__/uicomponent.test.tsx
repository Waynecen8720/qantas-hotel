import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Selector, Rating } from '../UIComponents';

describe('Selector Component', () => {
  const mockOptions = [
    { value: 'asc', text: 'Price low-high' },
    { value: 'des', text: 'Price high-low' },
  ];

  const mockOnChange = jest.fn();

  it('renders Selector component', () => {
    render(
      <Selector
        value="asc"
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    expect(screen.getByRole('selector')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Price low-high')).toBeInTheDocument();
  });

  it('updates value when prop changes', () => {
    const Wrapper: React.FC = () => {
      const [value, setValue] = useState('asc');
      return (
        <Selector
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={mockOptions}
        />
      );
    };

    render(<Wrapper />);
    const selectElement = screen.getByRole('selector') as HTMLSelectElement;
    expect(selectElement.value).toBe('asc');
    selectElement.value = 'des';
    fireEvent.change(selectElement);
    expect(selectElement.value).toBe('des');
  });
});

describe('Rating Component', () => {
  const mockRate = {
    ratingValue: 4.5,
    ratingType: 'star',
  };

  it('renders the correct number of full, half stars', () => {
    render(<Rating rate={mockRate} />);
    
    const fullStars = screen.getAllByTitle('full');
    const halfStars = screen.getAllByTitle('half');
    
    expect(fullStars).toHaveLength(4);
    expect(halfStars).toHaveLength(1);
  });

  it('renders the correct number of full, half circles', () => {
    const mockRateCircle = { ...mockRate, ratingType: 'circle' };
    render(<Rating rate={mockRateCircle} />);
    
    const fullCircles = screen.getAllByTitle('full');
    const halfCircles = screen.getAllByTitle('half');
    
    expect(fullCircles).toHaveLength(4);
    expect(halfCircles).toHaveLength(1);
  });
});