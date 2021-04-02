import React from 'react';
import './ToddItems.css';

let ToddItems = (props) => {
   const {itemsdata,deletitems} = props;
   const length = itemsdata.length;

   const listitems = length ? ( itemsdata.map((item)=>{
       return (
           <div className='items'>
               <p key={item.id}>{item.id} , {item.name} , {item.age}  </p>
               <p onClick={()=> deletitems(item.id)} >Delete</p>
               
               <hr/>
           </div>
       )
   })
   ) : (
       <div>Not exit data</div>
      )
   return (
       <div>
        {listitems}
       </div>
   )
}
export default ToddItems;
