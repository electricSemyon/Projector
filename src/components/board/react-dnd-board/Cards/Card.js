import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = null;//require('../../../assets/images/gal.png');
const delPng = null;//require('../../../assets/images/del.png');


const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-content">
          <div className="item-author">{`${item.firstName} ${item.lastName}`}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
