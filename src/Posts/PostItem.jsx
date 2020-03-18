import React, { Component } from "react";
import styles from "./PostItem.module.css";
import { Button } from "../Button/Button";
import { Like } from "../Button/Icon/Like";

export class PostItem extends Component {
  state = {
    like: false
  };

  toggleLike = () => {
    const {
      post: { id },
      changeCount
    } = this.props;
    const { like } = this.state;

    this.setState(prevState => ({
      like: !prevState.like
    }));
    changeCount(id, like);
    if (like) return;
    alert(id);
  };

  render() {
    const { like } = this.state;
    const { post } = this.props;
    return (
      <div className={styles.post}>
        <div className={styles.post__leftSide}>
          <img className={styles.post__img} src={post.download_url} />
        </div>
        <div className={styles.post__rightSide}>
          <div className={styles.post__headerWrapper}>
            <div className={styles.post__header}>
              <div className={styles.post__user}>
                <div className={styles.post__avatar}>{/* <img /> */}</div>
                <p className={styles.post__username}>{post.transformName}</p>
              </div>
              {/* <p className={styles.post__description}>{post.title}</p> */}
              <p className={styles.post__date}>{post.time}h</p>
            </div>
            <div className={styles.post__underline}></div>
          </div>
          <img className={styles.post__img} src={post.download_url} />
          <div className={styles.post__footerWrapper}>
            <div className={styles.post__footer}>
              <div className={styles.post__likesWrapper}>
                <Button handleClick={this.toggleLike}>
                  <Like like={like} />
                </Button>
                <span className={styles.post__likes}>{post.likes}</span>
              </div>
              <p className={styles.post__description}>
                A good place to be. Film shot from Iceland. The man of the
                bottom left of the frame shows. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export const PostItem = ({ post }) => {
//   const [like, setLike] = useState(false);

//   const toggleLike = useCallback(() => {
//     setLike(like ? !like : like);
//   }, [like]);

//   return (
//     <div className={styles.post}>
//       <div className={styles.post__headerWrapper}>
//         <div className={styles.post__header}>
//           <div className={styles.post__avatar}>{/* <img /> */}</div>
//           <p className={styles.post__username}>{post.transformName}</p>
//           {/* <p className={styles.post__description}>{post.title}</p> */}
//           <p className={styles.post__date}>{post.time}h</p>
//         </div>
//       </div>
//       <img className={styles.post__img} src={post.download_url} />
//       <div className={styles.post__footerWrapper}>
//         <div className={styles.post__footer}>
//           <div className={styles.post__likesWrapper}>
//             {/* {like ? (
//               <Heart style={{ fontSize: 17, marginRight: 5 }} />
//             ) : (
//               <BorderedHeart style={{ fontSize: 17, marginRight: 5 }} />
//             )} */}
//             <Button
//               handleClick={() => {
//                 toggleLike();
//               }}
//             >
//               <Like like={like} />
//             </Button>
//             <span className={styles.post__likes}>{post.likes}</span>
//           </div>
//           <p className={styles.post__description}>
//             A good place to be. Film shot from Iceland. The man of the bottom
//             left of the frame shows. Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua. Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
