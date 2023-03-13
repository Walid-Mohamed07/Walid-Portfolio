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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam est minima quaerat, neque saepe iure corporis praesentium eligendi, impedit similique veniam cum illum eum ducimus libero voluptas amet facere?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae perferendis, eos quas aspernatur, accusamus voluptates nisi impedit, earum porro corporis eius soluta reprehenderit facere eum velit officiis? Nostrum, illum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam eos qui rem incidunt aspernatur a ab quo nobis esse voluptatibus omnis consequuntur laudantium corrupti quaerat enim. Nostrum, eius placeat.
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