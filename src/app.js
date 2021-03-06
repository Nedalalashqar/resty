// import React from 'react';

// import './app.scss';

'use strict'
import React , {useState, useEffect} from 'react';
import './app.scss';
import axios from 'axios'
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
// import History from './components/history';

function App(props){

  const [state, setState] = useState({data: '', requestParams:{}});
  const [history,setHistory]=useState([]);
async function callApi(requestParams) {
  setState({requestParams})
  setHistory([...history,requestParams.url,requestParams.method])
  try
  { 
   const dataurl = await axios.get(requestParams.url);
 
   const data = {
     headers: [dataurl.headers],
     results: [dataurl.data.results],
   };
   setState({data}); 
 }
 catch(e){
   console.log('error');
 }
 }

 useEffect(()=> {
  console.log("%c I RUN ON EVERY RE-RENDER", 'background:#ccc; color:red');
});

useEffect(()=> {
  console.log(`%c I RUN ON HISTORY CHANGE: ${history}` , 'background:#000; color:purple');
}, [history]);

useEffect(()=> {
  console.log("I RUN ON STATE, HISTORY CHANGE: ", state);
}, [state, history]);

useEffect(()=> {
  console.log("Initial loading ", state);
}, []);
  

  return (
    <React.Fragment>
      <Header />     
      <Form history={history} handleApiCall={callApi} />
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
