import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import useStyles from './styles.js';


const NewsCard = ({ article, i}) => {
    //console.log(article);
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={article.urlToImage || 'https://github.com/itzomen/Trendd/blob/main/Trendd.png' } />
                    <div>
                        <Typography variant="body2" color="textSecondary" component="h2">{( new Date(article.publishedAt)).toDateString()}</Typography>
                        <Typography variant="body2" color="textSecondary" component="h2">{article.source.name}</Typography>
                    </div>
                    <Typography gutterBottom variant="h5">{article.title}</Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;