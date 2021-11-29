import React, { useState } from "react";
import { EditCheepContainer } from "../../Styles/Cheep/EditCheepContainer.style";
import { useDispatch, useSelector } from "react-redux";
// import { Loader } from "../../Styles/Modal/Loader.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { editCheep, updateCheepCard, updateTimeline } from "../../store/cheep";
import { fetchUser } from "../../store/session";

export default function EditCheep({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const updateState = useSelector((state) => state.cheep.updateCheepCard);
  const [content, setContent] = useState(cheep.content);

  const updateCheep = async () => {
    await fetch(`/api/cheeps/${cheep.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
    dispatch(editCheep(false));
    if (setCheeps) setCheeps([]);
    dispatch(updateTimeline(!timeline));
    dispatch(updateCheepCard(!updateState));
    dispatch(fetchUser(user.id));
  };
  return (
    <EditCheepContainer>
      <div>
        <span onClick={() => dispatch(editCheep(false))}>X</span>
        <img src={user.profile_photo} alt="" className="avatar" />
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
          <div onClick={updateCheep}>Update</div>
        </div>
      </div>
    </EditCheepContainer>
  );
}
