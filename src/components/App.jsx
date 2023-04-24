import React from 'react';
import Header from './Header';
import Form from './Form';
import { useState, useEffect } from 'react';
import ListaTweets from './ListaTareas';

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
    // Este set tareas sirve para eliminar la tarea
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
            setTareas={setTweets}
            setTarea={setTweet}
          />
        </div>
        <div className='w-full'>
          <ListaTareas
            tweets={tweets}
            setTarea={setTweet}
            eliminarTarea={eliminarTweet}
          />
        </div>
      </div>
    </>
  );
}

export default App;
