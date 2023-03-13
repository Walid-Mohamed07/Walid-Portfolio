import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hello and welcome to my portfolio website! My name is Walid and I'm a web developer with a focus on frontend development. I specialize in creating beautiful and responsive websites using modern technologies like JavaScript and React JS. With 2 years of experience in the industry, I have worked with a variety of clients to help bring their ideas to life. I'm passionate about creating clean and efficient code that not only looks great but also delivers a seamless user experience.
                    </p>
                    {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae perferendis, eos quas aspernatur, accusamus voluptates nisi impedit, earum porro corporis eius soluta reprehenderit facere eum velit officiis? Nostrum, illum.
                    </p> */}
                    <p>
                        Thank you for taking the time to visit my website and please feel free to reach out if you have any questions or are interested in working together.
                    </p>
                </div>

                <div className='stage-cube-count'>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
export default About;