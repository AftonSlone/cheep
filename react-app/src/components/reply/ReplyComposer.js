import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReplyCheepContainer } from "../../Styles/Reply/ReplyCheepContainer.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { updateCheepCard, updateTimeline } from "../../store/cheep";
import { updateReplyModal } from "../../store/reply";

export default function ReplyComposer({ setCheeps, update, setUpdate }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const updateState = useSelector((state) => state.cheep.updateCheepCard);
  const [content, setContent] = useState("");

  const newReply = async () => {
    await fetch("/api/replies", {
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
    if (setCheeps) setCheeps([]);
    if (setUpdate) setUpdate(!update);
    await dispatch(updateCheepCard(!updateState));
    await dispatch(updateTimeline(!timeline));
    await dispatch(updateReplyModal(false));
  };

  return (
    <ReplyCheepContainer>
      <div>
        <img src={user.profile_photo} alt="" />
      </div>
      <div>
        <div>
          <textarea
            placeholder="Cheep your reply..."
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
