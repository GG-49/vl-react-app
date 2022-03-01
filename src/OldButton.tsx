import React from 'react'; 

const Button = (props: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => { 
  
  return ( 
    
    <button>{props.text}</button> 
    
  ); 
} 

export {Button};