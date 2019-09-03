import React from 'react';
import Day from './Day';

const DayNames = () => (
  <div className='week names'>
    <Day>{'Lun'}</Day>
    <Day>{'Mar'}</Day>
    <Day>{'Mie'}</Day>
    <Day>{'Jue'}</Day>
    <Day>{'Vie'}</Day>
    <Day>{'Sab'}</Day>
    <Day>{'Dom'}</Day>
  </div>
);

export default DayNames;
