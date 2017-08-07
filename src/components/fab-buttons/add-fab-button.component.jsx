import React, {Component} from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const AddButton = ({style, ...props}) =>
  <Button fab color="primary" style={{position: 'absolute', bottom: 16, right: 16, ...style}} {...props}>
    <AddIcon />
  </Button>;

export default AddButton;
