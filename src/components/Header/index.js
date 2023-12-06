import styles from "./Header.module.css"; // dei o nome do import de styles
import imageInsta from "../../images/instagram-png-icon-2.png"
import imageLinkedin from "../../images/linkedin-logo-linkedin-icon-transparent-free-png.png"



function Header(){
    return(
        <header className={styles.header}>

            <div>

                
                
                <div id={styles.instagram}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <img id={styles.imgInstagram} src={imageInsta} alt="logo instagram" /> </a>
                </div>

                
                <div id={styles.linkedin}>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"> <img id={styles.imgLinkedin} src={imageLinkedin} alt="logo linkedin" /> </a>
                </div>
            </div>

        </header>


    )
}


export default Header;