import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import classnames from "classnames/bind";
import { Rating } from "@/UIComponents";
import { HotelData } from "@/utils/service";
import { Cancellation } from '@/utils/eumns';
import PricePart from './PricePart';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface HotelsInfoProps {
  hotelsData: HotelData,
}

const HotelsInfo: React.FC<HotelsInfoProps> = ({ hotelsData }) => {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
   

  return (
    <section className={cx('hotelsinfo-container')}  role="hotels-info">
      {hotelsData && hotelsData.length > 0 && hotelsData.map(hotel => (
        <div
          key={hotel.id}
          className={cx('item-container')}
        >
          <div className={cx('image-part')}>
            <Image
              loader={imageLoader}
              width="160"
              height='128'
              src={hotel.property.previewImage.url}
              alt={hotel.property.previewImage.caption}
            />
            {hotel?.offer?.promotion?.title && <span className={cx('offer-text')}>{hotel.offer.promotion.title}</span>}
          </div>
          <div className={cx('info-part')}>
            <div className={cx('title-rating')}>
              <div className={cx('text-container')}>
                <span title={hotel.property.title}>{hotel.property.title}</span>
              </div>
              <Rating rate={hotel.property.rating} />
            </div>
            <span className={cx('address-text')}>{hotel.property.address.join(', ')}</span>
            <div className={cx('items')}>
              <div className={cx('left')}>
                <span className={cx('offer-text')}>{hotel.offer.name}</span>
                {hotel.offer.cancellationOption.cancellationType === Cancellation && <span className={cx('cancel-text')}>Free cancellation</span>}
              </div>
              <PricePart offer={hotel.offer} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HotelsInfo;