import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTweetContainer } from "../../Styles/Home/HomeTweetContainer.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { updateTimeline } from "../../store/cheep";
// import { ErrorContainer } from "../../Styles/Auth/ErrorContainer.style";

export default function CheepComposer({ setCheeps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);

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

    if (data.errors) {
      setErrors(data.errors);
      return;
    }

    if (image) {
      const form_data = new FormData();
      form_data.append("photo", image);
      await fetch(`/api/cheeps/${data.id}/photo`, {
        method: "POST",
        body: form_data,
      });
    }

    setCheeps([]);
    setContent("");
    setImage(null);
    setErrors(null);
    dispatch(updateTimeline(!timeline));
  };

  const addPhoto = (e) => {
    setImage(e.target.files[0]);
    e.target.value = "";
  };

  return (
    <HomeTweetContainer>
      <div>
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
              <span className="deletePhoto" onClick={() => setImage(null)}>
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
        {errors && (
            <div className="cheepComposerErrors">
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
          )}
      </div>
    </HomeTweetContainer>
  );
}
