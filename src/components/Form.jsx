import React, { useState, useEffect } from 'react';
import AlertError from './AlertError';

const Form = ({ tweet, tweets, setTweets, setTweet }) => {
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tweet).length > 0) {
      setDescripcion(tweet.descripcion);
      setFecha(tweet.fecha);
    }
  }, [tweet]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (descripcion.trim().length === 0 || fecha.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);

    // objeto de tweets
    const objetoTweets = {
      descripcion,
      fecha,
    };

    // Editar tweet
    if (tweet.id) {
      objetoTweets.id = tweet.id;

      const tweetsActualizados = tweets.map((tweetState) =>
        tweetState.id === tweet.id ? objetoTweets : 'una cosa'
      );
      setTweets(tweetsActualizados);
      setTweet({});
    } else {
      // Spread operator ...tweets
      objetoTweets.id = generarId();
      setTweets([...tweets, objetoTweets]);
    }

    // limpiar formulario
    setDescripcion('');
    setFecha('');
  };

  return (
    <div className=''>
      <div className='text-center text-xl font-bold text-slate-300 mb-2'>
        Publica tu Tweet
      </div>
      <div className='shadow-lg bg-slate-200 rounded-md mx-6 py-3'>
        <form onSubmit={handleSubmit}>
          {error && (
            <AlertError>No puedes enviar un tweet vacío o sin fecha</AlertError>
          )}

          <div className='auto-rows-auto m-4'>
            <label className='w-full'>Fecha</label>
            <input
              className='rounded p-3 shadow-lg w-full'
              type='date'
              name=''
              id=''
              placeholder='Selecciona la fecha'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className='auto-rows-auto m-4'>
            <label className='w-full'>Descripción</label>
            {error && (
              <p className='text-red-500 text-sm mt-1'>
                La descripción no puede estar vacía
              </p>
            )}

            <input
              className='rounded p-3 shadow-lg w-full'
              type='text'
              name=''
              id=''
              placeholder='Qué estas pensando?'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          {tweet.id ? (
            <div className='auto-rows-auto m-4'>
              <input
                className='w-full bg-purple-600 p-3 rounded-full text-white font-bold hover:bg-purple-900 cursor-pointer uppercase'
                type='submit'
                value='Actualizar'
              />
            </div>
          ) : (
            <div className='auto-rows-auto m-4'>
              <input
                className='w-full bg-blue-600 p-3 rounded-full text-white font-bold hover:bg-blue-900 cursor-pointer uppercase'
                type='submit'
                value='Subir tweet'
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
