import React from 'react'; 

const ListComponent = (props: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => { 
  
  return ( 
    
    <div> 
    
      <h1>{props.text}</h1> 
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};