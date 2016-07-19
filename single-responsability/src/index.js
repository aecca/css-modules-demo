import buttons from './buttons.css';
import styles  from './styles.css';


const html = `
 <div class='${styles.box}'>
   <div class='${styles.header}'>Titulo Bloque</div>
   <div class='${styles.body}'>
      <button class='${buttons.default}'>Default</button>
      <button class='${buttons.danger}'>Submit</button>
      <button class='${buttons.warning}'>Warning</button>
   </div>
</div>
`;

document.write(html);