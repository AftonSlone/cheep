import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTweetContainer } from "../../Styles/Home/HomeTweetContainer.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { updateTimeline } from "../../store/cheep";

export default function CheepComposer({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [content, setContent] = useState("");

  const newCheep = () => {
    fetch("api/cheeps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
      }),
    });
    setCheeps([]);
    dispatch(updateTimeline(!timeline));
  };

  return (
    <HomeTweetContainer>
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
          <div onClick={newCheep}>Cheep</div>
        </div>
      </div>
    </HomeTweetContainer>
  );
}
