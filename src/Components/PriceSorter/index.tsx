import React from 'react';
import classnames from "classnames/bind";
import { Selector } from '@/UIComponents';
import { Sort } from "@/utils/eumns";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

interface PriceSorter {
  priceSorter: Sort,
  onPriceSorterChange: (value: Sort) => void;
}

interface SorterOption {
  value: Sort,
  text: string,
}

const sorterOptions: SorterOption[] = [
  { value: Sort.des, text: 'Price high-low' },
  { value: Sort.asc, text: 'Price low-high' }
];

const PriceSorter: React.FC<PriceSorter> = ({
  priceSorter,
  onPriceSorterChange
}) => {
  return (
    <div role='price-sorter'>
      <label className='bold-text'>Sort by</label>
      <Selector
        name="sortBy"
        id="sortBy"
        value={priceSorter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onPriceSorterChange(e.target.value as Sort)}
        options={sorterOptions}
      />
    </div>
  )
};

export default PriceSorter;