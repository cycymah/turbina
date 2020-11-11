import React from 'react';
import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// import apiRequest from '../utils/api'
// import { FormContext } from '../contexts/FormContext';
import { ContextSongsData } from '../contexts/ContextSongsData';
import songsList from '../constants/songsList';

function App() {
  // const [ SubmitRequestConfirmed, setSubmitRequestConfirmed ] = React.useState(false);
  // const [ songsData, setSongsData ] = React.useState({});
  // const [ userData, setUserData ] = React.useState({});

  // создаём переменную для хранения и передачи контектста в Form
  // const formContext = {submitRequestState: SubmitRequestConfirmed, handleSubmit: handleUpdateUser};

  // запрос массива песен
  // React.useEffect(() => {
  //   apiRequest.getSongs()
  //   .then((items) => {
  //     setSongsData(items);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, []);

  // запрос сохранения данных формы
  // function handleUpdateUser(formData) {
  //   apiRequest.saveUserInfo(formData)
  //   .then((data) => {
  //     setUserData(data);
  //     setSubmitRequestConfirmed(true);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  return (
    <ContextSongsData.Provider value={songsList}>
      <div className="page">
        <div className="page__container">
          <Header />
          {/* <FormContext.Provider value={formContext}> */}
          <Main />
          {/* </FormContext.Provider> */}
          <Footer />
        </div>
      </div>
    </ContextSongsData.Provider>
  );
}

export default App;
