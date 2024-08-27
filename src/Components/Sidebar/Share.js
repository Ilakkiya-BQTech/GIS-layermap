import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../Styles/popup.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharePopup = ({ onClose, pageLink }) => {
  const handleMailShare = () => {
    window.location.href = `mailto:?subject=Check this page&body=Here is the link: ${pageLink}`;
  };

  const handleWhatsAppShare = () => {
    window.open(`https://api.whatsapp.com/send?text=Check this page: ${pageLink}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageLink);
    toast.success('Link copied to clipboard!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="share-popup-overlay">
        <div className="share-popup">
          <div className="share-popup-header">
            <span>Share</span>
            <FaTimes className="share-popup-close" onClick={onClose} />
          </div>
          <div className="share-popup-content">
            <button onClick={handleMailShare}>Share via Email</button>
            <button onClick={handleWhatsAppShare}>Share via WhatsApp</button>
            <button onClick={handleCopyLink}>Copy Link</button>
          </div>
        </div>
      </div>

      
      <ToastContainer />
    </>
  );
};

export default SharePopup;

