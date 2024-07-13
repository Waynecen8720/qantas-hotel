/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import classnames from "classnames/bind";
import {
  Header,
  PriceSorter,
} from "@/Components";
import { Sort, mockCity } from "@/utils/eumns";
import { getHotelsData, sortDataByPrice, HotelData } from "@/utils/service";
import styles from "./page.module.scss";

const cx = classnames.bind(styles);

export default function Home():JSX.Element {
  const [hotelsData, setHotelsData] = useState<HotelData>([]);
  const [priceSorter, setPriceSorter] = useState<Sort>(Sort.des);

  const onPriceSorterChange = (value: Sort): void => {
    setPriceSorter(value);
    setHotelsData(sortDataByPrice(hotelsData, value));
  }

  useEffect(() => {
    const fetchData = async() => {
      const data:HotelData = await getHotelsData();
      setHotelsData(sortDataByPrice(data, priceSorter));
    }
    fetchData();
  }, []);

  return (
    <div className={cx('page-container')} role='main'>
      <Header />
      <section className={cx('info-section')}>
        <span>
          <span className='bold-text'>{hotelsData.length}</span>
          <span className='italic-text'> hotels in </span>
          <span className='bold-text'>{mockCity}.</span>
        </span>
        <PriceSorter
          priceSorter={priceSorter}
          onPriceSorterChange={onPriceSorterChange}
        />
      </section>
    </div>
  );
}
