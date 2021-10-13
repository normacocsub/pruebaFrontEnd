import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const Noticia = (props) => {

    return(
        <div>
            <Grid container  spacing={16}>
                <Grid item xs={12}>
                <Grid container  justify="center" spacing={40}>
                    {[0, 1, 2, 3].map(value => (
                    <Grid key={value} item style={{paddingLeft: (50), paddingTop: (25)}}>
                        <Card  style = {{maxWidth: (260), maxHeight: (300)}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="150"
                                image="https://th.bing.com/th/id/R.efa16b9686a9d0a0f9ac541b6804f1d7?rik=wJoAFsR2pF4rAA&pid=ImgRaw&r=0"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p" style = {{wordWrap: ('break-word')}}>
                                $texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las mñas noches, duelos y quebrantos, los sábados, lentejas, los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.";
                                    $lineas = wordwrap($texto, 45, "<br />");
                                    echo $lineas;
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Noticia;