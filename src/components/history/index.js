import React from 'react';
import { useReducer } from "react";

function History(props){
  return (
    <>
       <ul>
        {props.api.map((api, indx) => {
          return (
            <li key={indx} onClick={() => props.dispatch(removeAction(api))}>
              {api}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default History;
