import React, { useEffect, useState } from 'react';

import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/News/Cards';

import Logo from './images/Trendd.png';

import useStyles from './styles';

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [Articles, setArticles] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'Headlines'){
                    setArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url, '_blank');
                      alanBtn().playText('Opening...');
                    } else {
                      alanBtn().playText('Please try that again...');
                    }
                }
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={Logo} className={classes.Logo} alt="logo" />
            </div>
            <NewsCards articles={Articles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;