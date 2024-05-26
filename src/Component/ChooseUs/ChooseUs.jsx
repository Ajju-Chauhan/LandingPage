import Style from "./ChooseUs.module.css";
import Imgage from "../../assets/cardimg.png"
function ChooseUs() {
  return (
    <>
      <h1 className={Style.MainText}>Why Choose us?</h1>
      <div className={Style.outDiv}>
        <div className={Style.innerDiv}>
        <img src={Imgage} alt="" className={Style.img} />
          <h5>100% Success Rate</h5>
          <p className={Style.innerText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={Style.btn}>Read More</button>
        </div>
        <div className={Style.innerDiv}>
        <img src={Imgage} alt="" className={Style.img} />
          <h5>98% Success Rate</h5>
          <p className={Style.innerText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={Style.btn}>Read More</button>
        </div>
        <div className={Style.innerDiv}>
            <img src={Imgage} alt="" className={Style.img} />
          <h5>100% Success Rate</h5>
          <p className={Style.innerText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={Style.btn}>Read More</button>
        </div>
    
      </div>
    </>
  );
}
export default ChooseUs;
