// PopupMessage.js
import '../assets/PopupMessage.css'; // Import the external CSS file
// eslint-disable-next-line react/prop-types
const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup-message">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default PopupMessage;