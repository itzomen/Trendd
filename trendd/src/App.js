import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'Test'){
                    alert('The test interaction was successful');
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Trendd</h1>
        </div>
    )
}

export default App;