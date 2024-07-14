import React from "react";
import classnames from "classnames/bind";
import { Offer } from '@/utils/service';
import { SymbolMapping } from '@/utils/eumns';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface PricePartProps {
  offer: Offer
}

const PricePart: React.FC<PricePartProps> = ({ offer }) => {
  return (
    <div className={cx("price-part")}>
      <span>{`1 night totle (${offer.displayPrice.currency})`}</span>
      <span className={cx('total')}>
        <span className={cx('total-symbol')}>{SymbolMapping[offer.displayPrice.currency]}</span>
        <span className={cx('total-number')}>{offer.displayPrice.amount}</span>
      </span>
      {offer.savings && <span className={cx('save-text')}>Save {SymbolMapping[offer.savings.currency]}{offer.savings.amount}~</span>}
    </div>
  );
};

export default PricePart;
