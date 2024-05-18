// *********************************************************** REACT CODE

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ImageUploader.css';
// import ImageModal from './ImageModal';

// const ImageUploader = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [uploads, setUploads] = useState([]);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showUploadedImages, setShowUploadedImages] = useState(false);

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

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !description || !image) {
//       alert('Please fill all fields and select an image');
//       return;
//     }

//     const newUpload = {
//       title,
//       description,
//       imageFile: image,
//       imagePreview: preview
//     };

//     setUploads([...uploads, newUpload]);
//     setTitle('');
//     setDescription('');
//     setImage(null);
//     setPreview(null);
//   };

//   const handleUploadToCloudinary = async (upload) => {
//     const formData = new FormData();
//     formData.append('title', upload.title);
//     formData.append('description', upload.description);
//     formData.append('imageFile', upload.imageFile);

//     try {
//       const response = await axios.post('http://localhost:8000/upload/upImage', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('Image uploaded to Cloudinary successfully');
//       console.log(response.data);
//       fetchUploadedImages(); // Refresh the uploaded images
//     } catch (error) {
//       console.error('Error uploading to Cloudinary', error);
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

//   const toggleUploadedImages = () => {
//     setShowUploadedImages(!showUploadedImages);
//   };

//   return (
//     <div className="image-uploader-container">
//       <form onSubmit={handleSubmit} className="image-uploader-form">
//         <h2>Upload Image</h2>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Image</label>
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={handleImageChange}
//             required
//           />
//         </div>
//         {preview && <img src={preview} alt="Preview" className="image-preview" />}
//         <button type="submit" className="upload-button">Add to List</button>
//       </form>

//       <div className="display-section">
//         {uploads.map((upload, index) => (
//           <div key={index} className="upload-box">
//             <div className="upload-details">
//               <h2>Title:</h2>
//               <h4 className='upload-title'>{upload.title}</h4>
//               <h2>Description:</h2>
//               <p className='upload-title'>{upload.description}</p>
//               <button onClick={() => handleUploadToCloudinary(upload)} className="upload-cloud-button">Upload to Cloudinary</button>
//             </div>
//             <div className="upload-image">
//               <img src={upload.imagePreview} alt={upload.title} />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="uploaded-images-section">
//         <h3 onClick={toggleUploadedImages} className="toggle-uploaded-images">
//           {showUploadedImages ? "Hide Uploaded Images" : "Show Uploaded Images"}
//         </h3>
//         {showUploadedImages && (
//           <ul>
//             {uploadedImages.map((image, index) => (
//               <li key={index}>
//                 <a href="#!" onClick={() => openModal(image)}>{image.title}</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <ImageModal show={showModal} onClose={closeModal} image={selectedImage} />
//     </div>
//   );
// };

// export default ImageUploader;














import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './ImageUploader.css';
import ImageModal from './ImageModal';
import { addImage } from '../../actions/imageActions';

const ImageUploader = ({ addImage }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUploadedImages, setShowUploadedImages] = useState(false);

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const fetchUploadedImages = async () => {
    try {
      const response = await axios.get('https://imgupload-6fbc.onrender.com/upload/getImages');
      setUploadedImages(response.data.images);
    } catch (error) {
      console.error('Error fetching uploaded images', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert('Please fill all fields and select an image');
      return;
    }

    const newUpload = {
      title,
      description,
      imageFile: image,
      imagePreview: preview
    };

    setUploads([...uploads, newUpload]);
    addImage(newUpload); // Dispatch action to add image to Redux store
    setTitle('');
    setDescription('');
    setImage(null);
    setPreview(null);
  };

  const handleUploadToCloudinary = async (upload) => {
    const formData = new FormData();
    formData.append('title', upload.title);
    formData.append('description', upload.description);
    formData.append('imageFile', upload.imageFile);

    try {
      const response = await axios.post('https://imgupload-6fbc.onrender.com/upload/upImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Image uploaded to Cloudinary successfully');
      console.log(response.data);
      fetchUploadedImages(); // Refresh the uploaded images
    } catch (error) {
      console.error('Error uploading to Cloudinary', error);
    }
  };

  const openModal = async (image) => {
    try {
      const response = await axios.get(`https://imgupload-6fbc.onrender.com/upload/getImage/${image._id}`);
      setSelectedImage(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching image', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const toggleUploadedImages = () => {
    setShowUploadedImages(!showUploadedImages);
  };

  return (
    <div className="image-uploader-container">
      <form onSubmit={handleSubmit} className="image-uploader-form">
        <h2>Upload Image</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {preview && <img src={preview} alt="Preview" className="image-preview" />}
        <button type="submit" className="upload-button">Add to List</button>
      </form>

      <div className="display-section">
        {uploads.map((upload, index) => (
          <div key={index} className="upload-box">
            <div className="upload-details">
              <h2>Title:</h2>
              <h4 className='upload-title'>{upload.title}</h4>
              <h2>Description:</h2>
              <p className='upload-title'>{upload.description}</p>
              <button onClick={() => handleUploadToCloudinary(upload)} className="upload-cloud-button">Upload to Cloudinary</button>
            </div>
            <div className="upload-image">
              <img src={upload.imagePreview} alt={upload.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="uploaded-images-section">
        <h3 onClick={toggleUploadedImages} className="toggle-uploaded-images">
          {showUploadedImages ? "Hide Uploaded Images" : "Show Uploaded Images"}
        </h3>
        {showUploadedImages && (
          <ul>
            {uploadedImages.map((image, index) => (
              <li key={index}>
                <a href="#!" onClick={() => openModal(image)}>{image.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ImageModal show={showModal} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addImage: (image) => dispatch(addImage(image)),
});

export default connect(null, mapDispatchToProps)(ImageUploader);
