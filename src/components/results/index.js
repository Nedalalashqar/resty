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
function Results(props){
  return (
    <section>
      { props.data ?<JSONPretty data-testid="renderedData" data={props.data}></JSONPretty>  : null}
    </section>
  );
}

export default Results;
