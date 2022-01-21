import React , { useState , useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos , setVideos] = useState([]);
  const [seletedVideo , setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  const search =  query => {
    setSelectedVideo(null)
    youtube.search(query) //
    .then(videos => {
      setVideos(videos)
    })
  };
  /* 
  useCallback : 한번 만들면 메모리에 계속 보관. 꼭 필요할때만 쓰기 
  :: 자식 컴포넌트에 프롭으로 전달 할 때...
  */
  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
      }, [youtube]);
  
  return (
    <div className={styles.app}>

      <SearchHeader 
      onSearch = {search}
      />

      <section className={styles.content} >

        {seletedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={seletedVideo}/>
          </div>
        )}

        <div className={styles.list}>
          <VideoList 
          videos = {videos} 
          onVideoClick={selectVideo}
          display={ seletedVideo ? 'list' : 'grid' }
          />
        </div>
    {/* component는 프롭 형태로 스타일X(밑으로 전달해줘버려). 
        부모로 감싸서 자식으로 전달 */}
      </section>
      
    </div>
  );
}

export default App;

/*
- 데이터에서 받아온 비디오 목록 state 생성_ useState
- 마운트 or 업데이트 되었을 때 callback 등록_ useEffect

- 컴포넌트 안에서 네트워크 처리X
- key를 코드에 남겨놓으면 안돼
- .env 설정
*/
