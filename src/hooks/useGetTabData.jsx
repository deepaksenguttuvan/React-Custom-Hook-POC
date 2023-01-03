import React from 'react';
import { useState, useEffect } from 'react';

export const useGetTabData = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => getData(), []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return data;
};

export default useGetTabData;
