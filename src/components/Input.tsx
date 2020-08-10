import React from 'react';
import styles from './Input.module.scss';

export const Input: React.FC< React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => <input className={styles.input} {...props} />;
