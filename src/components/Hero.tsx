import HeroLogo from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='flex justify-center w-full h-screen bg-white items-center'>
            <img src={HeroLogo} alt="hero" className="w-3/4" />
        </div>
    )
}

export default Hero