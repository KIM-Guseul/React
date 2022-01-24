import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'Guseul',
      company: '1024',
      theme: 'light',
      title: 'SW Engineer',
      email: 'beadkim067@gmail.com',
      message: 'Bon Courage!',
      fileName: 'guseul',
      fileURL: '/images/guseul.png'
    },
    '2': {
      id: '2',
      name: 'Golden',
      company: '1024',
      theme: 'dark',
      title: 'SW Engineer',
      email: 'beadkim067@gmail.com',
      message: 'Bon Courage!',
      fileName: 'bead',
      fileURL: null
    },
    '3': {
      id: '3',
      name: 'Bead',
      company: '1024',
      theme: 'colorful',
      title: 'SW Engineer',
      email: 'beadkim067@gmail.com',
      message: 'Bon Courage!',
      fileName: 'bead',
      fileURL: '/images/bead.png'
    }
  });
  // 배열로 full loop 돌리는 방법 : 데이터가 많아지면 효율성 떨어져.
  // key , object 이용해서 key값이 일치하는 데이터만 업데이트

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  });

  // const onAdd = (card) => {
  //   const updated = [...cards, card]
  //   setCards(updated);
  // }

  const createOrUpdateCard = card => {
    // const updated = { ...cards }; 
    // updated[card.id] = card;
    // setCards(updated);
    /* !! 컴포넌트 안에 있는 state 이용해서 업데이트 :: 동기적으로 업데이트 할 수 없을수도 있어 (오래된 스테이트..)*/

    setCards(cards => {
      const updated = { ...cards }; 
      updated[card.id] = card;
      return updated;
    });
    /* 콜백함수 이용 => 최신의 스테이트값 불러와서 업데이트 */
  }

  const deleteCard = card => {

    setCards(cards => {

      const updated = { ...cards }; 
      delete updated[card.id];
      return updated;

    });
  }


  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>

      <div className={styles.container}>
        <Editor 
        cards={cards} 
        onAdd={createOrUpdateCard}
        updateCard={createOrUpdateCard}
        deleteCard={deleteCard}

        />
        <Preview cards={cards}/>
      </div>

      <Footer/>
    </section>

      
  );
};

export default Maker;