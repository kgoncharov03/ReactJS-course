import React from 'react';
import classNames from 'classnames/bind';

import Input from 'components/Input';

import styles from './NamedInput.module.scss';

const theme = classNames.bind(styles);


const NamedInput = ({ name, onChange, value }) => (
  <div className={theme('container')}>
    <div style={{ marginRight: '40px'}}>{name}</div>
    <Input name={name} onChange={onChange} value={value} />
  </div>
);

export default NamedInput;