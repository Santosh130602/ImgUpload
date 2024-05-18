// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ImageModal from './ImageModal';  // Import the modal component

// // const UploadedImages = () => {
// //   const [uploadedImages, setUploadedImages] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   useEffect(() => {
// //     fetchUploadedImages();
// //   }, []);

// //   const fetchUploadedImages = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8000/upload/getImages');
// //       setUploadedImages(response.data.images);
// //     } catch (error) {
// //       console.error('Error fetching uploaded images', error);
// //     }
// //   };

// //   const openModal = async (image) => {
// //     try {
// //       const response = await axios.get(`http://localhost:8000/upload/getImage/${image._id}`);
// //       setSelectedImage(response.data);
// //       setShowModal(true);
// //     } catch (error) {
// //       console.error('Error fetching image', error);
// //     }
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     setSelectedImage(null);
// //   };

// //   return (
// //     <div className="uploaded-images-container">
// //       <h2>Uploaded Images</h2>
// //       <ul>
// //         {uploadedImages.map((image, index) => (
// //           <li key={index}>
// //             <a href="#!" onClick={() => openModal(image)}>{image.title}</a>
// //           </li>
// //         ))}
// //       </ul>
// //       <ImageModal show={showModal} onClose={closeModal} image={selectedImage} />
// //     </div>
// //   );
// // };

// // export default UploadedImages;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImageModal from './ImageModal';  // Import the modal component

// const UploadedImages = () => {
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     fetchUploadedImages();
//   }, []);

//   const fetchUploadedImages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/upload/getImages');
//       setUploadedImages(response.data.images);
//     } catch (error) {
//       console.error('Error fetching uploaded images', error);
//     }
//   };

//   const openModal = async (image) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/upload/getImage/${image._id}`);
//       setSelectedImage(response.data);
//       setShowModal(true);
//     } catch (error) {
//       console.error('Error fetching image', error);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="uploaded-images-container">
//       <h2>Uploaded Images</h2>
//       <ul>
//         {uploadedImages.map((image, index) => (
//           <li key={index}>
//             <a href="#!" onClick={() => openModal(image)}>{image.title}</a>
//           </li>
//         ))}
//       </ul>
//       <ImageModal show={showModal} onClose={closeModal} image={selectedImage} />
//     </div>
//   );
// };

// export default UploadedImages;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImageModal from './ImageModal';

// const UploadedImages = () => {
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     fetchUploadedImages();
//   }, []);

//   const fetchUploadedImages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/upload/getImages');
//       setUploadedImages(response.data.images);
//     } catch (error) {
//       console.error('Error fetching uploaded images', error);
//     }
//   };

//   const openModal = async (image) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/upload/getImage/${image._id}`);
//       setSelectedImage(response.data.image);
//       setShowModal(true);
//     } catch (error) {
//       console.error('Error fetching image', error);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="uploaded-images-container">
//       <h2>Uploaded Images</h2>
//       <ul>
//         {uploadedImages.map((image, index) => (
//           <li key={index}>
//             <a href="#!" onClick={() => openModal(image)}>{image.title}</a>
//           </li>
//         ))}
//       </ul>
//       <ImageModal show={showModal} onClose={closeModal} image={selectedImage} />
//     </div>
//   );
// };

// export default UploadedImages;
