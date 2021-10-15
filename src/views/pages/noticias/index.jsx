import Noticia from "../../components/noticia";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import { getNews } from "../../redux/actions/newsActions";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { getToken } from "../../redux/actions/universalActions";
import { getContries } from "../../redux/actions/universalActions";
import { getEstados } from "../../redux/actions/universalActions";
import { getCiudades } from "../../redux/actions/universalActions";
import { getTime } from "../../redux/actions/watherActions";

 
const Noticias = () => {
    const dispatch = useDispatch();
    const notices = useSelector( state => state.allNews);
    const [news, setNews] = useState([]);
    const [countries, setCountries] = useState([]);
    const [estados, setEstados] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [ SelectPais, setPais] = useState("");
    const [time, seTime] = useState({});
    const [ciudadSelect, setCiudadSelect] = useState("");

    useEffect(() =>{ dispatch(getContries((res) => { setCountries(res)})); }, [])
    const OnClickButton = () => {
        
        //dispatch(getNews((res) => { SetNews(res) }));
        dispatch(getToken((res) => { SetToken(res)} ));
        dispatch(getTime((res) => {seTime(res)}, ciudadSelect))
    }

    const SetCountries =  (dato) =>{
        let arrayPrueba = [...dato]
        setCountries(arrayPrueba);
        console.log(countries);

    }
    

    const SetToken = (dato) => {
        localStorage.setItem('token-universal', dato.auth_token);
    }

    const SetNews = (dato) => {
        setNews(dato);
    }

    const onChangeCountries = (value) =>{
        dispatch(getEstados((res) => {setEstados(res)}, value))
    }

    const onChangeEstates = (value) => {
        dispatch(getCiudades((res) => {setCiudades(res)}, value))
    }

    const onChangeCity = (value) => {
        setCiudadSelect(value);
    }



    console.log(ciudades);

    return (
        
        <div>
            <div style={{marginLeft: '60%', paddingTop: '1%'}}>
                
                    <form>
                        
                        <Grid container  spacing={16}>
                            <div>
                            <FormControl >
                            <InputLabel >Pais</InputLabel>
                            <Select
                                //value={this.state.age}
                                //onChange={this.handleChange}
                                style = {{minWidth: (150)}}
                                onChange = {(value) => {onChangeCountries(value.target.value)}}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {
                                    countries?.map(value => (
                                        <MenuItem  value={value.country_name}>{value.country_name}</MenuItem>
                                    )
                                        
                                    )
                                }
                            </Select>
                            </FormControl>
                            </div>
                            <div>
                            <FormControl >
                            <InputLabel style ={{marginLeft: ('30%')}}>Estados</InputLabel>
                            <Select
                                //value={this.state.age}
                                //onChange={this.handleChange}
                                style = {{minWidth: (150)}}
                                onChange = {(value) => {onChangeEstates(value.target.value)}}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {
                                    estados?.map(value => (
                                        <MenuItem  value={value.state_name}>{value.state_name}</MenuItem>
                                    )
                                        
                                    )
                                }
                            </Select>
                            </FormControl>
                            </div>

                            <div>
                            <FormControl >
                            <InputLabel style ={{marginLeft: ('30%')}}>Ciudades</InputLabel>
                            <Select
                                //value={this.state.age}
                                //onChange={this.handleChange}
                                style = {{minWidth: (150)}}
                                onChange = {(value) => {onChangeCity(value.target.value)}}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {
                                    ciudades?.map(value => (
                                        <MenuItem   value={value.city_name}>{value.city_name}</MenuItem>
                                    )
                                        
                                    )
                                }
                            </Select>
                            </FormControl>
                            </div>
                            <Button variant="contained" color="primary"  onClick={OnClickButton}>Filtrar </Button>
                            </Grid>
                        
                        
                    </form>
               
            </div>
           
            
            <Noticia  news={news}/>
        </div>
    )
}

export default Noticias;