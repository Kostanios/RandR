import React from 'react';
import styles from './styles.module.scss';
import Support from '../../components/Svg/Support';
import Facebook from '../../components/Svg/Facebook';
import Instagram from '../../components/Svg/Instagram';
import Twitter from '../../components/Svg/Twitter';
import VK from '../../components/Svg/VK';
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <SupportAndLicenceContainer />
      <LinkIconsContainer />
    </div>
  );
};

const SupportAndLicenceContainer = () => {
  return (
    <div className={styles.SupportAndLicenceContainer}>
      <Support />
      <p className={styles.licence}>
        © 2020-2022 ООО «Релакс энд Резерв» , официальный сайт
      </p>
    </div>
  );
};

const LinkIconsContainer = () => {
  return (
    <div className={styles.LinkIconsContainer}>
      <VK />
      <Instagram />
      <Facebook />
      <Twitter />
    </div>
  );
};
export default Footer;
