import { useState } from 'react';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const Tweet = ({ tweet, setTweet, eliminarTweet, likes }) => {
  const { fecha, descripcion, id } = tweet;
  const [numLikes, setNumLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar el tweet?');

    if (respuesta) {
      eliminarTweet(id);
    }
  };

  const handleLikeClick = () => {
    const newLikes = numLikes + 1;
    localStorage.setItem(`likes_${tweet.id}`, JSON.stringify(newLikes));
    setNumLikes(newLikes);
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 1000);
  };

  return (
    <div className=''>
      <div className='shadow-lg bg-slate-200 rounded-md h-1/2 mx-6 mb-2'>
        <div className='py-5'>
          <div className='flex justify-center items-center mt-2'>
            <FaUserCircle className='inline-block mr-1' size={24} />
            {tweet.content}
          </div>
          <div className='mx-6 p-2'>
            <span>Fecha:</span> <span className='font-bold'>{fecha}</span>
          </div>
          <div className='mx-6 p-2'>
            <span>Descripción:</span>{' '}
            <span className='font-bold'>{descripcion}</span>
          </div>

          <div className='text-center justify-between'>
            <button
              className='bg-green-500 hover:bg-green-600 mt-3 py-1 px-4 mx-2 rounded-full text-bold text-sm'
              type='button'
              onClick={() => setTweet(tweet)}
            >
              Actualizar
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-600 mt-3 py-1 px-4 mx-2 rounded-full text-bold text-sm'
              type='button'
              onClick={handleEliminar}
            >
              Eliminar
            </button>

            <div className='mt-2'>{tweet.content}</div>
            <div className='mt-2'>
              <button
                className={`relative bg-purple-500 hover:bg-purple-600 mt-3 py-1 px-4 mx-2 rounded-full text-bold text-sm ${
                  isLiked && 'animate-pulse'
                }`}
                onClick={handleLikeClick}
              >
                <Transition
                  show={isLiked}
                  enter='transform ease-out duration-300'
                  enterFrom='scale-100'
                  enterTo='scale-125'
                  leave='transform ease-in duration-200'
                  leaveFrom='scale-125'
                  leaveTo='scale-100'
                >
                  <FaHeart className='absolute inset-0' />
                </Transition>
                <FaHeart className='inline-block mr-1' />
                {numLikes} {numLikes === 1 ? 'like' : 'likes'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
