import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
  const inputRef = useRef(); //button이 클릭되면 인풋이 클릭된 것처럼 접근.
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  }
  const onChange = (e) => {
    //console.log(e.target.files[0]);
    imageUploader.upload(e.target.files[0])
    .then(console.log)
  }

  return (
  <div className={styles.container}>

    <input className={styles.input}
      ref={inputRef}
      type='file'
      accept='image/*'
      name='file'
      onChange={onChange}
    />

    <button className={styles.button} onClick={onButtonClick}>
      {name || 'no file'}
    </button>    
    
  </div>
)}

export default ImageFileInput;