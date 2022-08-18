import React from "react";
import { useState, useRef } from "react";

function Feed() {
  const [comment, setComment] = useState();
  const [id, setId] = useState(1); //초기값을 넣어줘야 밑에 +1 이 찍힘
  const value = useRef(); //value를 참고하고 싶은 tag에 거는 것

  const [commentArray, setCommentArray] = useState([
    // 배열안에 객체로 관리
    {
      id: 0,
      content: "완전 맛있어 보인다",
    },
  ]);

  const addComment = () => {
    setId(id + 1);
    // comment spray
    const newComment = {
      id: id,
      content: value.current.value, // value : useRef를 담은 값, currnet.value: 해당 태그의 value
    };
    setCommentArray([...commentArray, newComment]);
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <div className="vertical-center">
          <img alt="" /> kowoonlee{" "}
        </div>
        <div>...</div>
      </div>
      <div className="feed-image">
        <img className="feed-my-img" src="images/20220801_163505.jpg" />
      </div>
      <div className="feed-menu padding-10">
        <div className="feed-icon">
          <img className="icon-img" alt="하트" src="images/heart.png" />
          <img className="icon-img" alt="말풍선" src="images/chat.png" />
          <img className="icon-img" alt="업로드" src="images/upload.png" />
          <span>
            <img
              className="bookmark icon-img"
              alt="책갈피"
              src="images/bookmark.png"
            />
          </span>
        </div>
      </div>
      <div className="feed-comment">
        <div className="feed-comment-like padiing-10">
          ainworld님 외 10명이 좋아합니다.
        </div>
        <div className="feed-comment-list  padiing-10">
          {commentArray.map((comment) => {
            //map 사용시에 식별할 수 있는 key가 필요
            return <li key={comment.id}>{comment.content}</li>;
          })}
        </div>
        <div>42분전</div>
        <div className="feed-comment-write">
          <input
            className="commentinput"
            type="text"
            placeholder="댓글 달기..."
            ref={value}
          />
          <button className="commentbutton" type="button" onClick={addComment}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
export default Feed;
