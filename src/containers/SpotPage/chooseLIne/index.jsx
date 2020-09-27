import React from 'react';
import styles from './styles.module.scss';
import { pages } from '../const/const';

const ChooseLine = ({ page, setPage }) => {
  return pages.map((pageName) => {
    return <LinkToPage page={page} setPage={setPage} name={pageName} />;
  });
};

const LinkToPage = ({ page, setPage, name }) => {
  const pageOnClickHandler = (e) => {
    console.log(e.target);
    setPage(name);
  };
  let status;
  if (page === name) {
    status = true;
  } else {
    status = false;
  }
  return (
    <div
      key={name}
      className={status ? styles.activePageLink : styles.pageLink}
      onClick={pageOnClickHandler}
    >
      <p>{name}</p>
    </div>
  );
};

export default ChooseLine;
