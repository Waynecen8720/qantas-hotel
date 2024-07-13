import React from 'react';
import Image from "next/image";
import { StaticImageData } from 'next/image';
import classnames from "classnames/bind";
import QantasLogo from "../../../public/qantas-logo.png";
import styles from './index.module.scss';

const cx = classnames.bind(styles);

// For futher cumstomize
const Header: React.FC = () => {
  return (
    <header className={cx("header-container")}>
      {QantasLogo && <Image className={cx("header-logo")} src={QantasLogo as StaticImageData} alt="company logo" />}
    </header>
  );
}

export default Header;