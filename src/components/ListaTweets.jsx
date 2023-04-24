import Tweet from './Tweet';

const ListaTweets = ({ tweets, setTweet, eliminarTweet }) => {
  const getLikes = (tweetId) => {
    const likes = localStorage.getItem(`likes_${tweetId}`);
    return likes ? JSON.parse(likes) : 0;
  };

  return (
    <div>
      {tweets && tweets.length ? (
        <>
          <div className='text-center text-xl font-bold text-slate-300 mb-2'>
            Tus tweets
          </div>
          {tweets.map((tweet) => {
            const likes = getLikes(tweet.id);
            return (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                setTweet={setTweet}
                eliminarTweet={eliminarTweet}
                likes={likes}
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
