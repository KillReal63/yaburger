import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';

const Tabs = ({ activeTab }) => {
  // const setTab = (tab) => {
  //   setActiveTab(tab);
  //   const element = document.getElementById(tab);
  //   if (element) element.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className={`${styles.tabs} mb-10`}>
      <Tab value='buns' active={activeTab === 'buns'}>
        Булки
      </Tab>
      <Tab value='sauces' active={activeTab === 'sauces'}>
        Соусы
      </Tab>
      <Tab value='mains' active={activeTab === 'mains'}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
