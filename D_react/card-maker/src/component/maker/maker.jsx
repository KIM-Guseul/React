import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const onAdd = (card) => {
    const updated = [...cards, card]
    setCards(updated);
  }

  const updateCard = (card) => {
    console.log(card);

  }

  const deleteCard = (card) => {
    console.log(card);

  }


  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>

      <div className={styles.container}>
        <Editor 
        cards={cards} 
        onAdd={onAdd}
        updateCard={updateCard}
        deleteCard={deleteCard}

        />
        <Preview cards={cards}/>
      </div>

      <Footer/>
    </section>

      
  );
};

export default Maker;