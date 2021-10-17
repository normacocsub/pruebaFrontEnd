
import Historys from "../../components/history"; 
import { getHistorys } from "../../redux/actions/historyActions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';




const History = () => {

    const dispatch = useDispatch();

    const [history, setHistory] = useState([]);

    useEffect(() =>{ 
        dispatch(getHistorys((res) => { setHistory(res)} ));
    }, []);
    return(
        <div>
            <Historys history={history}/>
        </div>
    );
}

export default History;