import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function Comments() {
  const url = 'https://jsonplaceholder.typicode.com/comments'


  const [comments, setComments] = useState([{}]);
  const [next, setNext] = useState(0);


  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setComments(data)
      })
  }, []);

  const handleClick = () => {
    setNext(next + 1)
  }
  return (
    <>
      {/* <div>
        {comments &&
          comments.map((comment) => (
            <>
              <p>N° : {comment.postId}</p>
              <h4>Nombre : {comment.name}</h4>
              <p>
                Comentario: {comment.body}
              </p>
            </>
          ))}

      </div> */}
      <div>{comments && <>
        <CommentCard comments={comments} next={next} />
        <button
          onClick={handleClick}
        >Siguiente</button>
      </>}</div>
    </>
  );
}


export default Comments;
