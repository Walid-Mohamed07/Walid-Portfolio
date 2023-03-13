import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_t977pkm',
            'template_lbdz0vc',
            refForm.current,
            '5Y3l0-0gTWYdtyPcT',
        )
        .then(() => {
            alert('Message successfully sent!');
            window.location.reload(false);
        },() => {
            alert('Failed to send the message, please try again');
        })
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Thank you for considering to get in touch with me. Whether you have a question about my work or are interested in collaborating on a project, I'm always happy to hear from you. Please feel free to use the contact form below to reach out, and I will do my best to respond to you as soon as possible. Alternatively, you can connect with me on social media or send me an email directly. I look forward to hearing from you.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='formName' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='contact-zone'>
                    <div className='contact-container'>
                        <div className='icon-wrapper'>
                            
                        </div>
                        <div className='text-wrapper'><span className='contact-title'>Location:</span><br /><span className='contact-desc'>New Nozha, Cairo, Egypt</span></div>
                    </div>
                    <br />
                    <div className='contact-container'>
                        <div className='icon-wrapper'></div>
                        <div className='text-wrapper'><span className='contact-title'>Email:</span><br /><span className='contact-desc'>walidmohamed234@gmail.com</span></div>
                    </div>
                    <br />
                    <div className='contact-container'>
                        <div className='icon-wrapper'></div>
                        <div className='text-wrapper'><span className='contact-title'>Call:</span><br /><span className='contact-desc'>01095383421</span></div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;