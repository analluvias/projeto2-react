import styles from "./Logo.module.css"; // dei o nome do import de styles
import imageLogo from "../../images/Purple Pink Y2K Retro Streetwear Planet Logo (1) (1).png"


function Logo(){
    return(
        <section className={styles.logo}>


            <div id={styles.logoDiv}>
            <img id={styles.logoImg} src={imageLogo} alt="imagem logo" />
            </div>

        </section>


    )
}


export default Logo;