import React, {Component} from 'react';

export default props => props.if ? <div className={props.className} style={props.style}>{props.children}</div> : null;

