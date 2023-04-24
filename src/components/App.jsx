import React from 'react';
import Header from './Header';
import Form from './Form';
import { useState, useEffect } from 'react';
import ListaTweets from './ListaTweets';

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({});

  useEffect(() => {
    const obtenerTweetsLocalStorage = () => {
      const tweetsLocalStorage =
        JSON.parse(localStorage.getItem('tweets')) ?? [];
      setTweets(tweetsLocalStorage);
    };
    obtenerTweetsLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  const eliminarTweet = (id) => {
    const actualizarTweet = tweets.filter((tweet) => tweet.id !== id);
    // permite agregar un documento sin afectar los otros
    setTweets(actualizarTweet);
    // Este set Tweets es para eliminar tweet
  };

  return (
    <>
      <div className='w-full text-center'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full'>
          <Form
            tweet={tweet}
            tweets={tweets}
            setTweets={setTweets}
            setTweet={setTweet}
          />
        </div>
        <div className='w-full'>
          <ListaTweets
            tweets={tweets}
            setTweet={setTweet}
            eliminarTweet={eliminarTweet}
          />
        </div>
      </div>
    </>
  );
}

export default App;
