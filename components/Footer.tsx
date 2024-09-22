const Footer: React.FC = (): JSX.Element => {
    return (
      <footer className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-9 mt-0">
        <div className="max-w-7xl mx-auto text-center flex flex-col justify-center h-4">
          <div>
            <p className="text-lg">Connect with me:</p>
          </div>
          <div>
            © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  