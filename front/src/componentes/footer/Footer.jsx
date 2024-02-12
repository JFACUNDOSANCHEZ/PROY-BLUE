import styles from './footer.module.css';

// import Location from '../../assets/cloudinary/Footer/Vector.png'
// import Phone from '../../assets/cloudinary/Footer/Phone.svg'
// import Mail from '../../assets/cloudinary/Footer/Mail.svg'

// import Facebook from '../../assets/cloudinary/Footer/Face.svg'
// import Ig from '../../assets/cloudinary/Footer/Ig.png'
// import Twitter from '../../assets/cloudinary/Footer/Twiter.svg'




const Footer = () => {


    return (
        <div className={styles.footerContainer}>
            <div className={styles.githubNames}>
            <h2>Contact</h2>
                <ul className={styles.contactList}>
                    <li><a >zeus@gmail.com</a></li>
                    <li><a >+54 2945 123456</a></li>
                    <li><a >avenida siempre viva calle 123</a></li>
                </ul>
            </div>
            <div className={styles.contact}>
               
            </div>
            <div className={styles.socialMedia}>
                <h2>Social Media</h2>
                <ul className={styles.socialMediaList}>
                    <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer">
                        <li>🥟</li>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <li>🥑 </li>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <li>🥬</li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;