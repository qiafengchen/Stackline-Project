import React from 'react';

import { useSelector } from 'react-redux';
import ApexChart from '../../conponents/elements/LineGraph/LineGraph';
import Table from '../../conponents/elements/Table/Table.js';

import classes from './Analytics.module.css';

const Analytics = () => {
  const product = useSelector((state) => state.product);

  return (
    <div className={classes.main}>
      <div className={classes.productOverview}>
        <img className={classes.img} src={product?.image} alt="title" />
        <text className={classes.title}>{product?.title}</text>
        <text className={classes.subtitle}>{product?.subtitle}</text>
        <ul>
          {product?.tags?.map((el) => (
            <li className={classes.tags}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={classes.chart}>
        <ApexChart />
        <Table />
      </div>
    </div>
  );
};

export default Analytics;
