import style from "./Introduction.module.css";
function Introduction() {
  return (
    <div className={style.Maindiv}>
      <div className={`${style.text}`}>
        <h1>Let’s Introduce Ourself</h1>
      </div>
      <hr></hr>
      <div className={style.divright}>
        <h6 style={{color: "white"}}>Criminal Lawyer</h6>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
