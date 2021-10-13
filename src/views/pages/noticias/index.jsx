import Noticia from "./noticia";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import { getNotices } from "../../redux/actions/noticesActions";

const Noticias = () => {
    const dispatch = useDispatch();
    const notices = useSelector( state => state.SET_NOTICES);
    useEffect(() => {
		dispatch(getNotices());
	}, []);

    console.log(notices);
    return (
        <div>
            <Noticia  titulo="prueba"/>
        </div>
    )
}

export default Noticias;