import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((articles, i) => (
                    <Grid Item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                        <NewsCard articles={articles} i={i}/>
                    </Grid>
                ))}
            </Grid>
            
        </Grow>
    );
}

export default NewsCards;