import React from 'react'

const Quote = ({quote,image,character}) => (
    <div>
     {quote}<br /><img src = "{image}"/><br />{character}
    </div>
  );
  
  export default Quote;