import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const theme = classNames.bind(styles);

const Input = ({ name, onChange, value }) => (
  <div className={theme('container')}>
    <input
      className={theme('input')}
      type="text"
      name={name}
      id={name}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Input;
