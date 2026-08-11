import "./index.css";
import imageqrcode from "../../images/image-qr-code.png";

const QrCard = () => (
  <section className="QR">
    <img src={imageqrcode} className="QR-img" />
    <div className="QRtextcontent">
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  </section>
);
export default QrCard;
