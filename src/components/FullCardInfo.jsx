import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';
import './FullCardInfo.css';

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
    <div className="cardInfo__wrapper">
      <div className="cardInfo">
        <div className="imgBox">
          {card ? (
            <img src={card.image_url} alt="img" className="about_img" />
          ) : (
            <div className="loading__img">
              <Spin tip="Loading..." />
            </div>
          )}
        </div>
        <div className="details">
          <div className="content">
            <p className="info_name">
              Name: {card ? <span className="info_sub">{card.name}</span> : ''}
            </p>
            <p className="info_name">
              Seller Fee Basis Points:
              {card ? (
                <span className="info_sub">
                  {card.asset_contract.opensea_seller_fee_basis_points}
                </span>
              ) : (
                ''
              )}
            </p>
            {card ? (
              <p className="info_name">
                Stats count: <span className="info_sub">{card.collection.stats.count}</span>
              </p>
            ) : (
              ''
            )}
            {card ? (
              <p className="info_name">
                Total supply: <span className="info_sub">{card.collection.stats.total_supply}</span>
              </p>
            ) : (
              ''
            )}
            {card ? (
              <p className="info_name">
                Created date: <span className="info_sub">{card.collection.created_date}</span>
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCardInfo;
