import "./normalize.css";
import "./skeleton.css";
import styles from './App.module.css';
import { 
        Header, 
        Content, 
        Footer 
      } from './components';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.app_content}>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
