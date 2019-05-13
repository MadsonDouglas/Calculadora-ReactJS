import React from 'react';

import './Button.css';

export default props =>
      
<button className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triplo ? 'triplo' : ''}
`} onClick={e => props.click && props.click(e.target.innerHTML)}>
    {props.label}
</button>

