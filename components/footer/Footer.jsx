import React from 'react';
import { Sigmar } from 'next/font/google'
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';

const font = Sigmar({
  weight:"400",
  subsets:["latin"]
})
const Footer = () => {

    const router = useRouter()
    return (
        <footer className={`${font.className} flex transition-all duration-500 bg-black text-white hover:bg-transparent hover:text-black w-full ${router.asPath === "/game" ? "absolute" : "relative"} bottom-0 justify-around p-5 items-center`}>
            <div className="icons">
                <span className=' flex gap-3'>
                    <Link href={"https://github.com/MJavadDe"} target='_blank'>
                        <GitHubIcon fontSize='large'/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/mohammad-javad-delavari-0b1a81267/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BQmHjAReMSfKIeNg1zjkpsg%3D%3D"} target='_blank'>
                        <LinkedInIcon fontSize='large' />
                    </Link>
                    <Link href={"mailto:javaddelavari95@gmail.com"} target='_blank'>
                        <EmailIcon fontSize='large'/>
                    </Link>
                </span>
            </div>
            <span>
                    Made with <FavoriteIcon/> by <Link href={"https://www.linkedin.com/in/mohammad-javad-delavari-0b1a81267/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BQmHjAReMSfKIeNg1zjkpsg%3D%3D"}><span className='text-orange-500'>Mohammad Javad Delavari</span></Link>
            </span>
        </footer>
    );
};

export default Footer;