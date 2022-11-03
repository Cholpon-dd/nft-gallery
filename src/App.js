import {Routes, Route} from 'react-router-dom'
import {useEffect} from 'react'
import Cards from "./components/Cards";
import Layout from "./components/Layout";
import FullCardInfo from "./components/FullCardInfo";
import {useSelector, useDispatch} from "react-redux";
import {Spin} from 'antd';
import {fetchCards} from "./store/cardSlice";

function App() {
    const {status} = useSelector(state => state.card)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [])
    return (
        <>
            {status === 'loading'
            ? <div className="loading">
                    <Spin tip="Loading..."/>
            </div>
            : <div className="wrapper">
                <Layout/>
                <Routes>
                    <Route path="/" element={<Cards/>}/>
                    <Route path="/:address/:id" element={<FullCardInfo/>}/>
                </Routes>
            </div>
        }
        </>
    );

}

export default App;
