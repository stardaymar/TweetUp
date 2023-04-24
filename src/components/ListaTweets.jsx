import Tweet from './Tweet';

const ListaTweets = ({ tweets, setTweet, eliminarTweet }) => {
  return (
    <div>
      {tweets && tweets.length ? (
        <>
          <div className='text-center text-xl font-bold text-slate-300 mb-2'>
            Tus tweets
          </div>
          {tweets.map((tweet) => {
            return (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                setTweet={setTweet}
                eliminarTweet={eliminarTweet}
              />
            );
          })}
        </>
      ) : (
        <>
          <div className='text-center text-xl font-bold text-slate-300'>
            No hay tweets
          </div>
        </>
      )}
    </div>
  );
};

export default ListaTweets;
