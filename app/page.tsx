import { FC } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const HomePage: FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center" style={{ backgroundImage: 'url(/OIP.jpeg)' }}>
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My  
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Portfolio:</span> 
        Where Ideas Meet  
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Technology!</span>
      </h1>
      <p className="text-lg mb-8 text-white">Navigate the Frontiers of Technology and Creative Solutions.</p>

      <div className="flex space-x-4 mt-6">
        <a href="https://www.linkedin.com/in/zainab-behzad-3126692b5" className="text-purple-500 hover:text-blue-400">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/zainabbehzad" className="text-purple-500 hover:text-gray-400">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/z_behzad_?igsh=a2ZuejVsZGp2a2pt" className="text-purple-500 hover:text-pink-400">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
