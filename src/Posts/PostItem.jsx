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
          <img className={styles.post__img} src={post.download_url} alt="pic" />
        </div>
        <div className={styles.post__rightSide}>
          <div className={styles.post__headerWrapper}>
            <div className={styles.post__header}>
              <div className={styles.post__user}>
                <div className={styles.post__avatar}>
                  <img
                    className={styles.post__avatar_img}
                    src={post.avatar}
                    alt="avatar"
                  />
                </div>
                <p className={styles.post__username}>{post.transformName}</p>
              </div>
              <p className={styles.post__date}>{post.time}h</p>
            </div>
            <div className={styles.post__underline}></div>
          </div>
          <img className={styles.post__img} src={post.download_url} alt="pic" />
          <div className="test"></div>
          <div className={styles.post__footerWrapper}>
            <div className={styles.post__footer}>
              <div className={styles.post__likesWrapper}>
                <Button handleClick={this.toggleLike}>
                  <Like like={like} />
                </Button>
                <span className={styles.post__likes}>{post.likes}</span>
              </div>
              <p className={styles.post__description}>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
