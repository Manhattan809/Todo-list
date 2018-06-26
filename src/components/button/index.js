import React from 'react';

import './index.css';

// type = add | edit | default
const Button = ({ onClick, type, children, item }) => (
    <button onClick={()=>this.props.deleteTodo(item.id)}>
        { children }
    </button>
);

export default Button;
