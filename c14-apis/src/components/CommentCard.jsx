import React from "react";

function CommentCard({ comments, next }) {
  return (
    <>
      <p>N° : {comments[next].postId}</p>
      <h4>Nombre : {comments[next].name}</h4>
      <p>
        Comentario: {comments[next].body}
      </p>
    </>);
}

export default CommentCard;
