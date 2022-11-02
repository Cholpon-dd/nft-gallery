import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Spin } from 'antd';


const FullCardInfo = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [card, setCard] = useState()

    useEffect(() => {
        async function getCardInfo() {
            try {
                const { data } = await axios.get(`https://api.opensea.io/api/v1/asset/${params.address}/${params.id}`)
                setCard(data)
            } catch (error) {
                navigate('/')
            }
        }
        getCardInfo()

    }, [])


    return (
        <div className="about__card">
            {card ? <img src={card.image_url} alt=""/> : "" }

            3333dfdsgdgdg

        </div>
    )
}

export default FullCardInfo