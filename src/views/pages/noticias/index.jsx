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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

 
const Noticias = () => {
    const dispatch = useDispatch();
    const notices = useSelector( state => state.allNews);
    const [news, setNews] = useState([]);
    const [countries, setCountries] = useState([]);
    const [estados, setEstados] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [ SelectPais, setPais] = useState("");
    const [time, seTime] = useState(false);
    const [ciudadSelect, setCiudadSelect] = useState("");

    useEffect(() =>{ 
        dispatch(getToken((res) => { SetToken(res)} ));
        dispatch(getContries((res) => { setCountries(res)}));
                     
                    }, [])
    const OnClickButton = () => {
        
        dispatch(getNews((res) => { SetNews(res) }, SelectPais));
        
        dispatch(getTime((res) => {seTime(res)}, ciudadSelect, SelectPais))
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
        dispatch(getEstados((res) => {setEstados(res)}, value.country_name))
        setPais(value.country_short_name);
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
                                        <MenuItem  value={value}>{value.country_name}</MenuItem>
                                    )
                                        
                                    )
                                }
                            </Select>
                            </FormControl>
                            </div>
                            <div>
                            <FormControl >
                            <InputLabel style ={{marginLeft: ('10%')}}>Estados</InputLabel>
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
                            <InputLabel style ={{marginLeft: ('10%')}}>Ciudades</InputLabel>
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
                                
            <div>
                {
                    time?(
                        <div style={{paddingTop: ('8%'), paddingLeft: ('15%'), maxWidth: (350), minHeight: (150), marginTop: (-150)}}>
                            
                            

                            <Card style={{boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)", backgroundColor: "#fafafa"}}>
                                <CardContent>
                                    <Grid container  spacing={16}>
                                        <div>
                                            <h4 >{time.data[0].weather.description} - {time.data[0].city_name}</h4>
                                            <h1>{time.data[0].temp}°C </h1>
                                            <h6>{time.data[0].ob_time}</h6>
                                        </div>
                                        <div>
                                            <img src={`https://www.weatherbit.io/static/img/icons/${time.data[0].weather.icon}.png`}></img>
                                        </div>
                                    </Grid>
                                </CardContent>

                            </Card>
                        </div>   
                    ):
                    (
                        <div>
                            
                        </div>
                    )
                }
            </div>
            
            <Noticia  news={news}/>
        </div>
    )
}

export default Noticias;