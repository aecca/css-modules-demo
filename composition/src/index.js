import styles from './buttons.css';

const html = `
  <h2> Hi, Hola </h2>
  <button class='${styles.button}'>Default</button>
  <button class='${styles.danger}'>Submit</button>
  <button class='${styles.warning}'>Warning</button>
`; 


document.write(html);