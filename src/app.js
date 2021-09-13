// import React from 'react';

// import './app.scss';

'use strict'
import React, { useState } from 'react';
import './app.scss';
import axios from 'axios'
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App(props){
  const [state, setState] = useState({data: '', requestParams:{}});
  
  async function callApi(requestParams) {
    const dataurl = await axios.get(requestParams.url);
    const data = {
      headers: [dataurl.headers], results: [dataurl.data.results],
    };
    setState({data, requestParams});
  }
  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
}

// // Let's talk about using index.js and some other name in the component folder
// // There's pros and cons for each way of doing this ...
// import Header from './components/header';
// import Footer from './components/footer';
// import Form from './components/form';
// import Results from './components/results';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;
