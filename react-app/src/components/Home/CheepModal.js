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
  const [image, setImage] = useState(null);

  const newCheep = async () => {
    const res = await fetch("api/cheeps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
      }),
    });

    const data = await res.json();

    if (image) {
      const form_data = new FormData();
      form_data.append("photo", image);
      await fetch(`/api/cheeps/${data.id}/photo`, {
        method: "POST",
        body: form_data,
      });
    }

    dispatch(updateNewCheep(false));
    setCheeps([]);
    setImage(null);
    dispatch(updateTimeline(!timeline));
  };

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

  const addPhoto = (e) => {
    setImage(e.target.files[0]);
    e.target.value = "";
  };
  return (
    <EditCheepContainer>
      {/* <div>
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
      </div> */}
      <div>
        <span onClick={() => dispatch(updateNewCheep(false))}>X</span>
        <img src={user.profile_photo} alt="" className="avatar" />
      </div>
      <div>
        <div>
          <textarea
            placeholder="What's happening?"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="cheepPhotoWrapper">
            {image && (
              <span
                className="deletePhoto"
                onClick={() => {
                  setImage(null);
                }}
              >
                X
              </span>
            )}
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="cheepPhoto"
              />
            )}
          </div>
        </div>
        <div>
          <div>
            <label>
              <MdOutlineInsertPhoto />
              <input
                id="file-upload"
                type="file"
                onChange={addPhoto}
                accept="image/*"
              />
            </label>
          </div>
          <div>
            <label>
              <MdOutlineGif />
              <input
                id="file-upload"
                type="file"
                onChange={addPhoto}
                accept="image/*"
              />
            </label>
          </div>
          <div onClick={newCheep}>Cheep</div>
        </div>
      </div>
    </EditCheepContainer>
  );
}
