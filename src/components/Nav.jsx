import { FaUser } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 py-2 px-4'>
      <div className='font-black text-gray-300 text-center content-center text-3xl my-5'>
        Tweet<span className='text-green-400'>Up</span>
      </div>
      <div className='flex items-center'>
        <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0'>
          <FaUser className='inline-block mr-1' />
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
};

export default Nav;
