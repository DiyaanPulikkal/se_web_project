import "./Admission.module.css";
function Admission(props) {
  return (
    <>
      <h1>Admission</h1>
      {props.isLoggedIn.value ? <p>Logged in</p> : <p>Not logged in</p>}
    </>
  );
}

export default Admission;
