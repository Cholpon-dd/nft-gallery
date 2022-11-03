import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';
import cn from 'classnames';
import style from './FullCardInfo.module.css';

const FullCardInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState();

  useEffect(() => {
    async function getCardInfo() {
      try {
        const { data } = await axios.get(
          `https://api.opensea.io/api/v1/asset/${params.address}/${params.id}`,
        );
        setCard(data);
      } catch (error) {
        navigate('/');
      }
    }
    getCardInfo();
  }, []);

  return (
    <>
      <div className={cn(style.title_text)}>
        <h3 className={cn(style.animate_charcter)}>Hover the Card</h3>
      </div>
      <div className={cn(style.cardInfo__wrapper)}>
        <div className={cn(style.cardInfo)}>
          <div className={cn(style.imgBox)}>
            {card ? (
              <img src={card.image_url} alt="image" className={cn(style.about_img)} />
            ) : (
              <div className={cn(style.loading__img)}>
                <Spin tip="Loading..." />
              </div>
            )}
          </div>
          <div className={cn(style.details)}>
            <div className={cn(style.content)}>
              <p className={cn(style.info_name)}>
                Name: {card ? <span className={cn(style.info_sub)}> {card.name}</span> : ''}
              </p>
              <p className={cn(style.info_name)}>
                Seller Fee Basis Points:
                {card ? (
                  <span className={cn(style.info_sub)}>
                    {card.asset_contract.opensea_seller_fee_basis_points}
                  </span>
                ) : (
                  ''
                )}
              </p>
              {card ? (
                <p className={cn(style.info_name)}>
                  Stats count:
                  <span className={cn(style.info_sub)}> {card.collection.stats.count}</span>
                </p>
              ) : (
                ''
              )}
              {card ? (
                <p className={cn(style.info_name)}>
                  Total supply:
                  <span className={cn(style.info_sub)}> {card.collection.stats.total_supply}</span>
                </p>
              ) : (
                ''
              )}
              {card ? (
                <p className={cn(style.info_name)}>
                  Created date:
                  <span className={cn(style.info_sub)}> {card.collection.created_date}</span>
                </p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCardInfo;
