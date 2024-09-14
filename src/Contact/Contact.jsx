import style from "./Contact.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import phonecon from './phone-calli.png';
import emailcon from './emaili.png';
import facebook from './facebookicon.png';

const position = [13.7265341, 100.7748818];

function Contact() {
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
                <p><img src={phonecon} alt="phone" className={style.iconEach}/>   02-329-8000</p>
                <p><img src={phonecon} alt="phone" className={style.iconEach}/>   02-329-8321</p>
                <p><img src={emailcon} alt="email" className={style.iconEach}/>   siie@kmitl.ac.th</p>
                <p><img src={emailcon} alt="email" className={style.iconEach}/>   wiboon.pr@kmitl.ac.th</p>
                <p> <a href="https://www.facebook.com/sekmitl"  target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" className={style.iconEach}/></a>    Software Engineering KMITL</p>
            </div>
      </div>
    </>
  );
}

export default Contact;
