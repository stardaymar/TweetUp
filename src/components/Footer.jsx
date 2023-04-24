import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <div className='flex items-center flex-shrink-0 text-gray-300 mr-6'>
        <FaTwitter className='mr-4 cursor-pointer transition-colors duration-300 hover:text-blue-500' />
        <FaFacebookF className='mr-4 cursor-pointer transition-colors duration-300 hover:text-indigo-500' />
        <FaInstagram className='mr-4 cursor-pointer transition-colors duration-300 hover:text-red-500' />
        <FaLinkedinIn className='cursor-pointer transition-colors duration-300 hover:text-blue-500' />
      </div>
      <div className='flex justify-center w-full mt-6 sm:mt-0 sm:w-auto'>
        <p className='text-sm text-gray-300'>
          © 2023 TweetUp. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
