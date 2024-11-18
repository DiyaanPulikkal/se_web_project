import { useState } from "react";
import style from "./Contact.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import phonecon from "./assets/phone-calli.png";
import emailcon from "./assets/emaili.png";
import facebook from "./assets/facebookicon.png";
import { useEffect } from 'react';

const position = [13.7265341, 100.7748818];

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index); 
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy to clipboard.");
      });
  };

  return (
    <>
      <h1 className="pageHeading">Contact Us</h1>
      <hr style={{width: "50%"}}/>
      <div className={style.Mapsection}>
        <h3>Map</h3>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "20rem", width: "70%", margin: "auto" }}
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

      <div className={style.containerDiv}>
        <div className={style.innerdiv}>
          <h3>Address</h3>
          <p>King Mongkut's Institute of Technology Ladkrabang</p>
          <p>1 Chalong Krung 1 Alley, Lat Krabang,</p>
          <p>Bangkok 10520, Thailand</p>
        </div>

        <div className={style.innerdiv}>
          <p
            onClick={() => copyToClipboard("02-329-8000", 0)}
            className={style.fortextface}
          >
            <img src={phonecon} alt="phone" className={style.iconEach} />{" "}
            02-329-8000{" "}
            {copiedIndex === 0 && (
              <span className={style.copiedPopup}>Copied</span>
            )}{" "}
          </p>
          <p
            onClick={() => copyToClipboard("02-329-8321", 1)}
            className={style.fortextface}
          >
            <img src={phonecon} alt="phone" className={style.iconEach} />{" "}
            02-329-8321{" "}
            {copiedIndex === 1 && (
              <span className={style.copiedPopup}>Copied</span>
            )}{" "}
          </p>
          <p>
            {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=siie@kmitl.ac.th&su=Subject%20Here&body=Message%20body"
              target="_blank"
              rel="noopener noreferrer"
              className={style.fortextface}
            >
              <img src={emailcon} alt="email" className={style.iconEach} />{" "}
              siie@kmitl.ac.th
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wiboon.pr@kmitl.ac.th&su=Subject%20Here&body=Message%20body"
              target="_blank"
              rel="noopener noreferrer"
              className={style.fortextface}
            >
              <img src={emailcon} alt="email" className={style.iconEach} />{" "}
              wiboon.pr@kmitl.ac.th
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://www.facebook.com/sekmitl"
              target="_blank"
              rel="noopener noreferrer"
              className={style.fortextface}
            >
              <img src={facebook} alt="facebook" className={style.iconEach} />{" "}
              Software Engineering KMITL
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
