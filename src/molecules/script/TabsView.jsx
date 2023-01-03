import React from 'react';
import { useState, useEffect } from 'react';
import Tabs from './../../atoms/script/Tabs';
import {useGetTabData} from './../../hooks/useGetTabData';
import ProductView from './ProductView';

const TabsView = (props) => {
  const arr = [
    'Products',
    'Parts',
    'Inspiration',
    'Technical',
    'Resources',
    'Help',
  ];
  const [activeTab, setActiveTab] = useState(arr[0]);
  const searchData = useGetTabData();

  return (
    <div>
      <h1>Tab Component</h1>
      <Tabs tabList={arr} onClick={(item) => setActiveTab(item)} />
      <p>{activeTab}</p>
      {/* <ProductView data={searchData} /> */}
    </div>
  );
};

export default TabsView;
