import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomeTweetContainer } from "../../Styles/Home/HomeTweetContainer.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import { MdOutlineInsertPhoto, MdOutlineGif } from "react-icons/md";

export default function CheepComposer() {
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.session.user);
  return (
    <HomeTweetContainer>
      <div>
        <img src={user.profile_photo} alt="" />
      </div>
      <div>
        <div>
          <textarea placeholder="What's happening?" />
        </div>
        <div>
          <div>
            <MdOutlineInsertPhoto />
          </div>
          <div>
            <MdOutlineGif />
          </div>
          <div>Cheep</div>
        </div>
      </div>
    </HomeTweetContainer>
  );
}
