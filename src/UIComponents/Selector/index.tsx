import React from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

interface Option {
  text: string,
  value: string,
}

interface Selector {
  classNames?: string,
  name?: string,
  id?: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[],
}

const Selector: React.FC<Selector> = ({
  classNames = '',
  name = '',
  id = '',
  value,
  onChange,
  options,
}) => {
  return (
    <select
      role="selector"
      className={`${classNames} ${cx('selector-container')}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option
          value={option.value}
          key={option.value}
        >
          {option.text}
          </option>
      ))}
    </select>
  );
};

export default Selector;