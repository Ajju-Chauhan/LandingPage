import { CiMail } from "react-icons/ci";
import style from "./Main.module.css"
import Image from "../../assets/Main.png"
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.text}>
        <h2>You dont's have to</h2>
        <h1>Fight them Alone</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <div className={style.mailBox}>
          <div className={style.mailtext}><CiMail className={style.maillogo}/>Enter your email address</div>
          <div className={style.mailbtn}>Let's Talk</div>
        </div>
      </div>
      <div className={style.Imgdiv}>
        <img src={Image} alt="" className={style.img}/>
      </div>
    </div>
  );
};
export default Main;
