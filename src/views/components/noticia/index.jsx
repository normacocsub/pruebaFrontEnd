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
    console.log(props.news)
    return(
        <div>
            <Grid container  spacing={16}>
                <Grid item xs={12}>
                <Grid container  justify="center" spacing={40}>
                    {props.news.articles?.map(value => (
                    <Grid key={value} item style={{paddingLeft: (50), paddingTop: (25)}}>
                        <Card  style = {{maxWidth: (260), maxHeight: (300), boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)"}}>
                            <CardActionArea
                            onClick = { (a) => {window.open(value.url)}}
                            >
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="150"
                                image={value.urlToImage}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h7" component="h3">
                                    {value.title}
                                </Typography>
                                {/* <Typography component="p" style = {{wordWrap: ('break-word')}}>
                                 {value.description}
                                </Typography> */}
                                </CardContent>
                            </CardActionArea>
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