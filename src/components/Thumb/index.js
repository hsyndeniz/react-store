import React from 'react';

const Thumb = props => (
  <div onClick={props.onClick} className={props.classes}>
    <img src={props.src} alt={props.alt} title={props.title} />
  </div>
);

export default Thumb;
