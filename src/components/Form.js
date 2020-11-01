import React from 'react'

import 'react-dropdown/style.css';

import Add_data from './Add_data';
import Delete_data from './Delete_data'



class Form extends React.Component {
  
  render() {
    return (
      <div>
      
       <Add_data/>
       <Delete_data />
   
    </div>
  );
}
}
export default Form