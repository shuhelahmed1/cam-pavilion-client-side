import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <section className='w-100 bg-dark'>
            <div className='footer-container text-center w-75 mx-auto py-4 bg-dark text-white'>
                <h5 style={{fontWeight: 'bold'}}>CAM PAVILION</h5>
                <p style={{fontSize: '12px'}}>We created Cam Pavilion because we saw the need for a better way to buy and sell photography and videography equipment. Passionate about the craft ourselves, we dreamed of a more focused platform designed for industry professionals and hobbyists.</p>
                <small>Copyright &copy; 2022 || Cam Pavilion</small>
            </div>
        </section>
        </>
    );
};

export default Footer;