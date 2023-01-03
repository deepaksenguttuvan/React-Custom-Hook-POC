import React from 'react';
import { useState } from 'react';
import '../styles/tabs.scss';

const Tabs = (props) => {
  return (
    <ul className="tablist">
      {props.tabList &&
        props.tabList.length > 0 &&
        props.tabList.map((item) => (
          <li onClick={() => props.onClick(item)}>{item}</li>
        ))}
    </ul>
  );
};

export default Tabs;
