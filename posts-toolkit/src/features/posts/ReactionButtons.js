import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReaction } from "../posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const getReactionNames = Object.keys(reactionEmoji);

  return (
    <div>
      {getReactionNames.map((name, i) => {
        return (
          <button
            key={i}
            className="reactionButton"
            onClick={() => {
              dispatch(addReaction({ postId: post.id, reaction: name }));
            }}
          >
            {reactionEmoji[name]} {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
};

export default ReactionButtons;
