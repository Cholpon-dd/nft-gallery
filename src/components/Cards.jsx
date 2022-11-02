import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {Avatar, Card, Spin} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards, selectCardsItem} from "../store/cardSlice";



const { Meta } = Card;
const Cards = () => {
    const dispatch = useDispatch()
    const {cards} = useSelector(state=> state.card)
    const [card, setCard] = useState()

    return (
        <div className="container">
                {cards.map((item) =>{
                    return <div key={item.id} className="card_container">
                        <img src={item.image_url} alt="img"  className="card__img"/>
                        <p>Name: {item.name}</p>
                        {/*<Link to=`/card/${item.id}`>About</Link></Button>*/}
                        <Link to={`/${item.asset_contract.address}/${item.token_id}`}><button className="btn">About</button> </Link>
                    </div>
                })}



                {/*// <Card key={item.id}*/}
                {/*    style={{ width: 250 }}*/}
                {/*    cover={*/}
                {/*//         <img*/}
                {/*//             alt="example"*/}
                {/*//             src={item.image_url}*/}
                {/*//         />*/}
                {/*//     }*/}
                {/*//     actions={[*/}
                {/*        // <SettingOutlined key="setting" />,*/}
                {/*        // <EditOutlined key="edit" />,*/}
                {/*        // <EllipsisOutlined key="ellipsis" />,*/}
                {/*        // <Link to={`/${item.asset_contract.address}/${item.token_id}`}><button>About</button> </Link>*/}
                {/*    // ]}*/}
                {/*// >*/}
                {/*//     <Meta*/}
                {/*        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}*/}
                {/*        // title={item.name}*/}
                {/*        // description="This is the description"*/}
                {/*    // />*/}
                {/*// </Card>*/}
            )
}




        </div>
    )
}

export default Cards