
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from './component/SignUp/SignUp';
// import Login from './component/Login/Login';
// import ImageUploader from './component/imageUplode/imaheUpload';
// import UploadedImages from './component/imageUplode/UploadedImages';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<SignUp />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path= "/uploadimg" element={<ImageUploader/>}/>
//           <Route path="/uploaded-images" component={UploadedImages} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import ImageUploader from './component/imageUplode/imaheUpload';
import UploadedImages from './component/imageUplode/UploadedImages';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/uploadimg" element={<ImageUploader />} />
            <Route path="/uploaded-images" component={UploadedImages} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
