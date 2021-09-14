// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

import React from 'react';
import JSONPretty from 'react-json-pretty';
import Loading from '../loading';
function Results(props){
  return (
    <section>
      { props.data ?<JSONPretty data-testid="renderedData" data={props.data}></JSONPretty>  : <Loading/>}
    </section>
  );
}

export default Results;
