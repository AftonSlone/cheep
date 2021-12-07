import React, { useState } from "react";
import { EditCheepContainer } from "../../Styles/Cheep/EditCheepContainer.style";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import {
  editCheep,
  setUpdateTimelineCheep,
  updateTimeline,
} from "../../store/cheep";


export default function EditCheep() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [content, setContent] = useState(cheep.content);
  const [errors, setErrors] = useState(null);

  const updateCheep = async () => {
    const res = await fetch(`/api/cheeps/${cheep.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    const data = await res.json();
    if (data.errors) {
      setErrors(data.errors);
      return;
    }

    dispatch(setUpdateTimelineCheep(data));
    dispatch(editCheep(false));
    setErrors(null);
    dispatch(updateTimeline(!timeline));
    // dispatch(updateCheepCard(!updateState));
    // dispatch(fetchUser(user.id));
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
        {errors && (
          <div className="cheepComposerErrors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
        )}
      </div>
    </EditCheepContainer>
  );
}
