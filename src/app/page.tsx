'use client';
import React, { useEffect, useState } from 'react';
import classnames from "classnames/bind";
import { Header } from "@/Components";
import { getHotelsData, ResultObj } from "@/utils/service";
import styles from "./page.module.scss";

const cx = classnames.bind(styles);

export default function Home():JSX.Element {
  const [hotelsData, setHotelsData] = useState<ResultObj[] | [] >([]);

  useEffect(() => {
    const fetchData = async() => {
      const data = await getHotelsData();
      setHotelsData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={cx("page-container")} role="main">
      <Header />
    </div>
  );
}
