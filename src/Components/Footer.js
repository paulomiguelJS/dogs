import React from 'react';
import styles from './Footer.module.css';
import { ReactCOmponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Dogs - Alguns direitos reservados</p>;
    </footer>
  );
};

export default Footer;
