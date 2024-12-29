import styles from "../styles/Home.module.scss";
import Layout from "../components";
import {Fade} from "react-awesome-reveal";

export default function Home() {

  return (
    <Fade delay={0.5}>
        <Layout>
              <div className={styles.homepageTitle}>
                  <a href='https://instagram.com/zkrat.kolektiv'>
                    <h1>
                        @zkrat.kolektiv
                    </h1>
                    <span className={styles.ig}>IG</span>
                  </a>
                  <p>
                      Interactive installations
                  </p>
                  <p>
                      Visualizations
                  </p>
                </div>
        </Layout>
    </Fade>
  );
}
