import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import image_def from '../assets/img/nnt.jpg';
import HeroSection from './HeroSection';
import './Cards.css';

const Cards = () => {
  const { cards } = useSelector((state) => state.card);

  return (
    <>
      <HeroSection />
      <div className="container">
        <div className="row">
          {cards.map((item) => {
            return (
              <div className="card" key={item.id}>
                {item.image_url ? (
                  <img src={item.image_url} alt="img" className="card__img" />
                ) : (
                  <img src={image_def} alt="img" className="def__img" />
                )}
                <h4 className="title">
                  Name: <span className="sub_title">{item.name ? item.name : 'Unknown'}</span>
                </h4>
                <Link to={`/${item.asset_contract.address}/${item.token_id}`} className="btn">
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
