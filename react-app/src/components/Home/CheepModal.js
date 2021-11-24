import React, { useState } from "react";
import { EditCheepContainer } from "../../Styles/Cheep/EditCheepContainer.style";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { updateNewCheep, updateTimeline } from "../../store/cheep";

export default function CheepModal({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [content, setContent] = useState("");

  const updateCheep = async () => {
    await fetch(`/api/cheeps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
      }),
    });
    dispatch(updateNewCheep(false));
    if (setCheeps) setCheeps([]);
    dispatch(updateTimeline(!timeline));
  };
  return (
    <EditCheepContainer>
      <div>
        <span onClick={() => dispatch(updateNewCheep(false))}>X</span>
        <img src={user.profile_photo} alt="" />
      </div>
      <div>
        <div>
          <textarea
            name="content"
            placeholder="What's happening?"
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
          <div onClick={updateCheep}>Cheep</div>
        </div>
      </div>
    </EditCheepContainer>
  );
}
