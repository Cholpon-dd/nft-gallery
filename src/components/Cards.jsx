import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import image_def from '../assets/img/nnt.jpg';
import HeroSection from './HeroSection';
import cn from 'classnames';
import style from './Cards.module.css';

const Cards = () => {
  const { cards } = useSelector((state) => state.card);

  return (
    <>
      <HeroSection />
      <div className={cn(style.container)}>
        <div className={cn(style.row)}>
          {cards.map((item) => {
            return (
              <div className={cn(style.card)} key={item.id}>
                {item.image_url ? (
                  <img src={item.image_url} alt="image" className={cn(style.card__img)} />
                ) : (
                  <img src={image_def} alt="default image" className={cn(style.def__img)} />
                )}
                <h4 className={cn(style.title)}>
                  Name:
                  <span className={cn(style.sub_title)}> {item.name ? item.name : 'Unknown'}</span>
                </h4>
                <Link
                  to={`/${item.asset_contract.address}/${item.token_id}`}
                  className={cn(style.btn)}
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
