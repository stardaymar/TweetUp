const AlertError = ({ children }) => {
  return (
    <>
      <div className='bg-red-500 p-3 text-white m-4 text-center'>
        <p className='text-danger '>⚠ {children}</p>
      </div>
    </>
  );
};

export default AlertError;
