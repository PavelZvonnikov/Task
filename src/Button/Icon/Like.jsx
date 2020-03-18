import React from "react";
import BorderedHeart from "@material-ui/icons/FavoriteBorder";
import Heart from "@material-ui/icons/Favorite";

export const Like = ({ like }) => {
  return (
    <div style={{ height: 16, marginRight: 5 }}>
      {like ? (
        <Heart style={{ fontSize: 16 }} />
      ) : (
        <BorderedHeart style={{ fontSize: 16 }} />
      )}
    </div>
  );
};
