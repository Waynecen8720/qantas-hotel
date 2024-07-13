import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Selector } from '../UIComponents';

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