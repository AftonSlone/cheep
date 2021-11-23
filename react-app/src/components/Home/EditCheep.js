import React, { useState } from "react";
import { EditCheepContainer } from "../../Styles/Cheep/EditCheepContainer.style";
import { useDispatch, useSelector } from "react-redux";
// import { Loader } from "../../Styles/Modal/Loader.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { editCheep, updateTimeline } from "../../store/cheep";

export default function EditCheep({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [content, setContent] = useState(cheep.content);

  const updateCheep = async () => {
    await fetch(`api/cheeps/${cheep.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
    dispatch(editCheep(false));
    setCheeps([]);
    dispatch(updateTimeline(!timeline));
  };
  return (
    <EditCheepContainer>
      <div>
        <span onClick={() => dispatch(editCheep(false))}>X</span>
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
          <div onClick={updateCheep}>Update</div>
        </div>
      </div>
    </EditCheepContainer>
  );
}
