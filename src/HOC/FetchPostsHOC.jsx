import React from "react";

const ImgAvatar1 = require("../images/cat1.jpg");
const ImgAvatar2 = require("../images/cat2.jpg");
const ImgAvatar3 = require("../images/cat3.jpg");
const ImgAvatar4 = require("../images/notcat.jpg");

export const FetchPostsHOC = Component =>
  class FetchPostsHOC extends React.Component {
    constructor() {
      super();

      this.state = {
        posts: [],
        avatars: {
          1: ImgAvatar1,
          2: ImgAvatar2,
          3: ImgAvatar3,
          4: ImgAvatar4
        },
        descriptions: [
          "Entire desire way design few. Mrs sentiments led solicitude estimating friendship fat.",
          "To travelling occasional at oh sympathize prosperous.",
          "Of distrusts immediate enjoyment curiosity do.",
          "At as do be against pasture covered viewing started.Enjoyed me settled mr respect no spirits civilly.",
          "Collected breakfast estimable questions in to favourite it. Known he place worth words it as to.",
          "Celebrated if remarkably especially an.",
          "May indulgence difficulty ham can put especially.",
          "Perhaps far exposed age effects.",
          "Sang put paid away joy into six her."
        ]
      };
    }

    randomInteger = (min, max) => {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    };

    addDescription = arr => {
      const { descriptions } = this.state;
      let newArr = [];
      arr.forEach(item => {
        let random = this.randomInteger(0, 8);
        newArr.push({ ...item, description: descriptions[random] });
      });
      return newArr;
    };

    addAvatar = arr => {
      const { avatars } = this.state;
      let newArr = [];
      arr.forEach(item => {
        let random = this.randomInteger(1, 4);
        newArr.push({ ...item, avatar: avatars[random] });
      });
      return newArr;
    };

    changeCount = (id, like) => {
      const { posts } = this.state;
      let list = [];
      list = posts.reduce((arr, current) => {
        const elemOfObj = { ...current };
        arr.push(elemOfObj);
        return arr;
      }, []);

      let index = list.findIndex(item => item.id === id);
      if (!like) {
        list[index].likes++;
      } else {
        list[index].likes--;
      }

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
        let time = this.randomInteger(1, 23);
        arr[i].time = time;
      }
      return arr;
    };

    randomLikesCount = arr => {
      for (let i = 0; i < arr.length; i++) {
        let likes = this.randomInteger(10, 1200);
        arr[i].likes = likes;
      }
      return arr;
    };

    getPosts = () => {
      fetch("https://picsum.photos/v2/list?page=1&limit=9")
        .then(response => response.json())
        .then(data => {
          let posts = this.transformName(data);
          posts = this.randomPostTime(posts);
          posts = this.randomLikesCount(posts);
          posts = this.addAvatar(posts);
          posts = this.addDescription(posts);
          return posts;
        })
        .then(posts => {
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
