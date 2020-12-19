import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/News/Cards';

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'Headlines'){
                    setArticles(articles);
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Trendd</h1>
            <NewsCards articles={Articles} />
        </div>
    )
}

export default App;