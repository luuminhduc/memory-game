import React from 'react';
import { Provider } from 'react-redux';
import Container from './components/Container';
import GetOptions from './components/GetOptions';
import Header from './components/Header';
import Main from './components/Main';
import Result from './components/Result';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
      <Header/>
      <Main/>
      <GetOptions/>
      <Result/>
      </Container>
    </Provider>
  );
}
 
export default App;