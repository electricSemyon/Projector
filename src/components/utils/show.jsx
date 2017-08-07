import React, {Component} from 'react';

export default ({ifTrue, ...props}) => ifTrue ? <div {...props}>{props.children}</div> : null;

