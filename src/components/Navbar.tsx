import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-[46px] bg-white z-[100] px-[1vw]">
      <div className="grid grid-cols-4 gap-x-[1vw] h-full justify-center auto-cols-fr">
        <div className="flex flex-col justify-center items-start">
          <div className="w-6 h-6 rounded-sm flex items-center justify-center">
           <img src={Logo} alt="logo" />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-start">
          <span className="text-[#1d1d1d] font-medium text-[1vw] tracking-normal">
            Creative Technology Studio
          </span>
        </div>
        
        <div className="flex flex-col justify-center items-start">
        </div>
        
        <div className="flex flex-col justify-center items-end">
          <div className="flex space-x-4">
            <a href="#studio" className="text-[#1d1d1d] text-[1vw] hover:opacity-70 transition-opacity">
              Studio
            </a>
            <a href="#contact" className="text-[#1d1d1d] text-[1vw] hover:opacity-70 transition-opacity">
              Contact
            </a>
            <a href="#work" className="text-[#1d1d1d] text-[1vw] hover:opacity-70 transition-opacity">
              Work
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}