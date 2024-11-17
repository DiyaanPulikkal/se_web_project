import style from "./Email.module.css";
import email from "./assets/email.png";


function Email() {
    return (
        <div className={style.outterdiv}>
            <h1 className={style.head}>Email</h1>
            <div className={style.backgroundEmail}>
                <form>
                    <img src={email} alt="Email" className={style.imageForemail}/>
                    <label className={style.textcolor}>
                        Email:
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="enter e-mail"
                        className={style.input}
                    />
                    <button className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
}



export default Email;