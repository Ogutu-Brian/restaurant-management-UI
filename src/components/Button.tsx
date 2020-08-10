import React from 'react';
import styles from './Button.module.scss';

export const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => <button className={styles.button} {...props}>{props.children}</button>;
