import {ImFacebook} from 'react-icons/im';
import {SlSocialTwitter} from 'react-icons/sl';
import {BsGoogle} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {SlSocialLinkedin} from 'react-icons/sl';
import {LuInstagram} from 'react-icons/lu';

const FooterComponent = () =>{
    return (
        
        <footer className="bg-dark text-center text-white mt-auto">
        
        <div className="container">
            
            <section>
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><ImFacebook/></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><SlSocialTwitter/></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><BsGoogle/></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><LuInstagram/></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><FiGithub/></a>

            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><SlSocialLinkedin/></a>
            </section>
            
            
            
            {/*<section class="mb-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
            </section>*/}
            
            
        </div>

        <div className="text-center" >
            © 2023 Copyright : 
            <a className="text-white" href="https://www.linkedin.com/in/raees-k-84596310a/"> Raees K</a>
        </div>
        </footer>
    )
    }
    
    export default FooterComponent;