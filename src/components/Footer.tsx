import FooterLogo1 from '../assets/hero.svg'
import FooterLogo2 from '../assets/logo.svg'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white px-[1vw]">
            <div className=" mx-auto">
                <div className='flex justify-between my-24'>
                    <div>
                        <img
                            src={FooterLogo2}
                            alt="logo&Fun"
                            className="w-2/3 h-auto object-contain"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 relative right-[160px] gap-12 mb-16">
                        {/* Menu Column */}
                        <div>
                            <h3 className="text-[#9a9a9a] text-[1vw] mb-2">Menu</h3>
                            <ul className="space-y-1">
                                <li><a href="#studio" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Studio</a></li>
                                <li><a href="#contact" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Contact</a></li>
                                <li><a href="#work" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Work</a></li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div className='relative right-20'>
                            <h3 className="text-[#9a9a9a] text-[1vw] mb-2">Social</h3>
                            <ul className="space-y-1">
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Linkedin</a></li>
                                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] hover:text-gray-600 transition-colors">Behance</a></li>
                            </ul>
                        </div>

                        {/* Business Enquiries Column */}
                        <div className='relative right-12'>
                            <h3 className="text-[#9a9a9a] text-[1vw] mb-2">Business enquiries</h3>
                            <a href="mailto:hi@formandfun.co" className="text-[#1d1d1d] hover:text-gray-600 transition-colors block mb-6">
                                hi@formandfun.co
                            </a>
                            <h3 className="text-[#9a9a9a] text-[1vw] mb-2">Join our team</h3>
                            <a href="mailto:apply@formandfun.co" className="text-[#1d1d1d] hover:text-gray-600 transition-colors block">
                                apply@formandfun.co
                            </a>
                        </div>
                    </div>
                </div>

                {/* Full width Form&Fun text/image */}
                <div className="w-full overflow-hidden">
                    <img
                        src={FooterLogo1}
                        alt="Form&Fun"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;