import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';

interface tab {
  activeTab: string;
}

const Tabs = ({ activeTab }: tab) => {
  // const setTab = (tab) => {
  //   setActiveTab(tab);
  //   const element = document.getElementById(tab);
  //   if (element) element.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className={`${styles.tabs} mb-10`}>
      <Tab value='buns' active={activeTab === 'buns'} onClick={() => {}}>
        Булки
      </Tab>
      <Tab value='sauces' active={activeTab === 'sauces'} onClick={() => {}}>
        Соусы
      </Tab>
      <Tab value='mains' active={activeTab === 'mains'} onClick={() => {}}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
