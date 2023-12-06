
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Showcase from "../../components/Showcase";
import styles from "./Home.module.css"


function Home() {
  return (
    <div>
      <Header id={styles.header}/>

      <Logo/>
      
      <Showcase id={styles.showcase}/>

    </div>
  );
}

export default Home;
