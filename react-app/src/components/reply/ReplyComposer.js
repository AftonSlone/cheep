import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReplyCheepContainer } from "../../Styles/Reply/ReplyCheepContainer.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { updateTimeline } from "../../store/cheep";
import { updateReplyModal } from "../../store/reply";

export default function ReplyComposer({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const [content, setContent] = useState("");

  const newReply = () => {
    fetch("api/replies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
        cheep_id: cheep.id,
      }),
    });
    setCheeps([]);
    dispatch(updateReplyModal(false));
    dispatch(updateTimeline(!timeline));
  };

  return (
    <ReplyCheepContainer>
      <div>
        <img src={user.profile_photo} alt="" />
      </div>
      <div>
        <div>
          <textarea
            placeholder="What's happening?"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <div>
            <MdOutlineInsertPhoto />
          </div>
          <div>
            <MdOutlineGif />
          </div>
          <div onClick={newReply}>Reply</div>
        </div>
      </div>
    </ReplyCheepContainer>
  );
}
