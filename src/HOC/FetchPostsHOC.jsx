import React from "react";

export const FetchPostsHOC = Component =>
  class FetchPostsHOC extends React.Component {
    constructor() {
      super();

      this.state = {
        posts: []
      };
    }

    changeCount = (id, like) => {
      const { posts } = this.state;
      const list = [...posts];
      console.log("before", list);
      let index = list.findIndex(item => item.id === id);
      if (!like) {
        list[index].likes++;
      } else {
        list[index].likes--;
      }
      console.log("after", list);
      this.setState({
        posts: list
      });
    };

    transformName = arr => {
      return arr.map(obj => {
        const transformName = obj.author.replace(/\s/g, "").toLowerCase();
        const newObj = { ...obj, transformName };
        return newObj;
      });
    };
    randomPostTime = arr => {
      for (let i = 0; i < arr.length; i++) {
        let rand = 1 - 0.5 + Math.random() * 23;
        let time = Math.round(rand);
        arr[i].time = time;
      }
      return arr;
    };

    randomLikesCount = arr => {
      for (let i = 0; i < arr.length; i++) {
        let rand = 10 - 0.5 + Math.random() * (1000 - 9);
        let likes = Math.round(rand);
        arr[i].likes = likes;
      }
      return arr;
    };

    // getPosts = () => {
    //   axios({
    //     method: "get",
    //     url: "https://api.flickr.com/services/rest",
    //     params: {
    //       method: "flickr.favorites.getList",
    //       api_key: API_KEY,
    //       user_id: "187413433@N05",
    //       extras: "url_n, owner_name, date_taken, views",
    //       page: 1,
    //       format: "json",
    //       nojsoncallback: 1,
    //       per_page: 2
    //     }
    //   })
    //     .then(response => {
    //       console.log("res", response.data.photos.photo);
    //       const posts = this.transformDate(response.data.photos.photo);
    //       this.setState({
    //         posts
    //       });
    //     })
    //     .catch(error => console.log(error.response));
    // };
    getPosts = () => {
      fetch("https://picsum.photos/v2/list?page=1&limit=9")
        .then(response => response.json())
        .then(data => {
          const posts = this.transformName(data);
          return posts;
        })
        .then(data => {
          const posts = this.randomPostTime(data);
          return posts;
        })
        .then(data => {
          const posts = this.randomLikesCount(data);
          return posts;
        })
        .then(posts => {
          console.log(posts);
          this.setState({
            posts
          });
        })
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.getPosts();
    }

    render() {
      const { posts } = this.state;
      return (
        <Component
          {...this.props}
          posts={posts}
          changeCount={this.changeCount}
        />
      );
    }
  };
