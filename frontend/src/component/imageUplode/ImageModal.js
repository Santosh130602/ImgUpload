// *********************************************************************************************************************************

// import React from 'react';
// import './ImageModal.css';

// const ImageModal = ({ show, onClose, image }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-box">
//           <div className="modal-details">
//             <h2>Title:</h2>
//             <h4 className="modal-title">{image.title}</h4>
//             <h2>Description:</h2>
//             <p className="modal-description">{image.description}</p>
//             <h2>View Count:</h2>
//             <p className="modal-view-count">{image.viewCount}</p>
//           </div>
//           <div className="modal-image">
//             <img src={image.imageUrl} alt={image.title} />
//           </div>
//         </div>
//         <button className="close-button" onClick={onClose}>×</button>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

// *********************************************************************************************************************************


import React from 'react';
import { connect } from 'react-redux';
import './ImageModal.css';

const ImageModal = ({ show, onClose, image }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box">
          <div className="modal-details">
            <h2>Title:</h2>
            <h4 className="modal-title">{image.title}</h4>
            <h2>Description:</h2>
            <p className="modal-description">{image.description}</p>
            <h2>View Count:</h2>
            <p className="modal-view-count">{image.viewCount}</p>
          </div>
          <div className="modal-image">
            <img src={image.imageUrl} alt={image.title} />
          </div>
        </div>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

// export default ImageModal;
const mapStateToProps = (state) => ({
  images: state.image.images,
});

export default connect(mapStateToProps)(ImageModal);




