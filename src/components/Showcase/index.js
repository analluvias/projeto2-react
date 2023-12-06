import styles from "./Showcase.module.css"; // dei o nome do import de styles
import imageIceCream from "../../images/ice-cream-pink.jpg"


function Showcase(){
    return(
        <section className={styles.showcase}>


            <div id={styles.iceCreamDiv}>
            <img id={styles.iceCreamImg} src={imageIceCream} alt="imagem sorvete" />
            </div>

        </section>


    )
}


export default Showcase;