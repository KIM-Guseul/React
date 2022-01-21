//import axios from 'axios'; 외부에서 전달받아. 어떤 라이브러리를 쓰던 이 파일에서는 상관X

class Youtube {
    constructor(httpClient){
        this.youtube = httpClient;
    }
    //dependency injection 

    async mostPopular() {
        const response = await this.youtube.get('videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 25,
          },
        });
        return response.data.items;
      }

      async search(query) {
        const response = await this.youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 25,
            type: 'video',
            q: query,
          },
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
      }
    }

export default Youtube;