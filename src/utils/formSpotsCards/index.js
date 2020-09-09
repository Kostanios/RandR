import React from 'react';
import EstCard from 'components/Establishment/Card';
import NoPhoto from 'utils/assets/no-photo.png';
import config from 'api/config';
import styles from './styles.module.scss';

function formWithIconsItems(spot) {
  const items = [];
  if (spot.rating) {
    let rating = calculateCurrentRating(spot.rating);
    items.push({ icon: 'STAR_ICON', value: `${rating}` });
  }
  if (spot.bill) {
    items.push({ icon: 'PURSE_ICON', value: `${spot.bill} BYN` });
  }
  return items;
}

function formWithoutIconsItems(spot) {
  const items = [];
  if (spot.category) {
    items.push({ value: spot.category });
  }
  if (spot.address) {
    items.push({ value: spot.address });
  }
  return items;
}

function calculateCurrentRating(ratingObj) {
  let currentRating = 0;
  let categoryNumber = 0;
  for (let category in ratingObj) {
    currentRating += ratingObj[category];
    categoryNumber++;
  }
  return currentRating / categoryNumber.toFixed(1);
}
export default function (baseUrl, spotsData) {
  console.log(spotsData);
  let formedCards = [];
  if (spotsData.length) {
    formedCards = spotsData.map((spot) => {
      console.log(spot.geo.address);
      const photo =
        spot.photos && spot.photos.length
          ? `${config.baseUrl}${spot.photos[0].url}`
          : NoPhoto;
      return (
        <div className={styles.swiperItem} key={spot.title + spot.id}>
          <EstCard
            title={spot.name}
            address={spot.geo.address}
            linkTo={`${baseUrl}${spot.id}`}
            photo={photo}
            withIconsItems={formWithIconsItems(spot)}
            withoutIconsItems={formWithoutIconsItems(spot)}
          />
        </div>
      );
    });
  } else {
    for (let i = 0; i < 10; i++) {
      formedCards.push(<EstCard key={i} stub={true} />);
    }
  }
  return formedCards;
}
