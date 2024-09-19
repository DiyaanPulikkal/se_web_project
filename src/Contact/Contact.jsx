import style from "./Contact.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import phonecon from './phone-calli.png';
import emailcon from './emaili.png';
import facebook from './facebookicon.png';

const position = [13.7265341, 100.7748818];

function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(text + ' copied to clipboard!');
      })
      .catch(() => {
        alert('Failed to copy to clipboard.');
      });
  };

  return (
    <>
      <h1 className= {style.header}>Contact Us</h1>


      <div className={style.Mapsection}>
        <h3>Google Map</h3>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "20rem", width: "70%" , margin: "auto"}}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      <div className= {style.containerDiv}>
            <div className= {style.innerdiv}>
                <h3>Address</h3>
                <p>King Mongkut's Institute of Technology Ladkrabang</p>
                <p>1 Chalong Krung 1 Alley, Lat Krabang,</p>
                <p>Bangkok 10520, Thailand</p>
            </div>

            <div className= {style.innerdiv}>
                <p onClick={() => copyToClipboard('02-329-8000')} className={style.fortextface}><img src={phonecon} alt="phone" className={style.iconEach}/>   02-329-8000</p>
                <p onClick={() => copyToClipboard('02-329-8321')} className={style.fortextface}><img src={phonecon} alt="phone" className={style.iconEach}/>   02-329-8321</p>
                <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siie@kmitl.ac.th&su=Subject%20Here&body=Message%20body"  target="_blank" rel="noopener noreferrer" className={style.fortextface}><img src={emailcon} alt="email" className={style.iconEach}/>   siie@kmitl.ac.th</a></p>
                <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wiboon.pr@kmitl.ac.th&su=Subject%20Here&body=Message%20body"  target="_blank" rel="noopener noreferrer" className={style.fortextface}><img src={emailcon} alt="email" className={style.iconEach}/>   wiboon.pr@kmitl.ac.th</a></p>
                <p> <a href="https://www.facebook.com/sekmitl"  target="_blank" rel="noopener noreferrer" className={style.fortextface}><img src={facebook} alt="facebook" className={style.iconEach}/>    Software Engineering KMITL</a></p>
            </div>
      </div>
    </>
  );
}

export default Contact;
