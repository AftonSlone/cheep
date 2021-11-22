import React, { useState } from "react";
import { EditCheepContainer } from "../../Styles/Cheep/EditCheepContainer.style";
import { useDispatch, useSelector } from "react-redux";
// import { Loader } from "../../Styles/Modal/Loader.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";
import { editCheep } from "../../store/cheep";

export default function EditCheep(setEditCheepModal) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const [content, setContent] = useState(cheep.content);
  console.log(content)
  return (
    <EditCheepContainer>
      <div>
        <span onClick={() => dispatch(editCheep(false))}>X</span>
        <img src={user.profile_photo} alt="" />
      </div>
      <div>
        <div>
          <textarea
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
          <div>Update</div>
        </div>
      </div>
    </EditCheepContainer>
  );
}
