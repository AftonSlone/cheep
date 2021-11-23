import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Styles/Modal/Loader.style";
import { CheepCardContainer } from "../../Styles/Cheep/CheepCardContainer.style";
import {
  MdOutlineChatBubbleOutline,
  MdOutlineCached,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { CheepCardProfilePhoto } from "../../Styles/Cheep/CheepCardProfilePhoto.style";
import { CheepCardUsername } from "../../Styles/Cheep/CheepCardUsername.style";
import { CheepCardContentContainer } from "../../Styles/Cheep/CheepCardContentContainer.style";
import { CheepCardContent } from "../../Styles/Cheep/CheepCardContent.style";
import { CheepCardActions } from "../../Styles/Cheep/CheepCardActions.style";
import { actionsMenu, singleCheep } from "../../store/cheep";
import { updateReplyModal } from "../../store/reply";

export default function ReplyCheepCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      if (cheep) {
        console.log(cheep.id);
        const res = await fetch(`/api/cheeps/${cheep.id}`);
        const data = await res.json();
        await dispatch(singleCheep(data));
      }
    })();
  }, [update, cheep, dispatch]);

  const handleLikes = async (e, cheep_id) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    if (id > 0) {
      console.log(id);
      await fetch(`/api/likes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          cheep_id: cheep_id,
        }),
      });
      setUpdate(!update);
      return;
    }
    await fetch(`/api/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        cheep_id: cheep_id,
      }),
    });
    setUpdate(!update);
    return;
  };

  const userLiked = () => {
    if (cheep.likes) {
      for (const like of cheep.likes) {
        if (like.user_id === user.id)
          return (
            <MdFavorite
              id={`${user.id}`}
              onClick={(e) => handleLikes(e, cheep.id)}
            />
          );
      }
    }
    return (
      <MdFavoriteBorder id="0" onClick={(e) => handleLikes(e, cheep.id)} />
    );
  };

  const openActionsMenu = () => {
    dispatch(singleCheep(cheep));
    dispatch(actionsMenu(true));
  };

  const openReplyMenu = () => {
    dispatch(singleCheep(cheep));
    dispatch(updateReplyModal(false));
  };

  if (!cheep)
    return (
      <CheepCardContainer>
        <Loader />
      </CheepCardContainer>
    );

  return (
    <CheepCardContainer>
      <CheepCardProfilePhoto>
        <img src={cheep.user.profile_photo} alt="" />
      </CheepCardProfilePhoto>
      <CheepCardContentContainer>
        <CheepCardUsername>
          {`@${cheep.user.username}`} <div onClick={openActionsMenu}>. . .</div>
        </CheepCardUsername>
        <CheepCardContent>{cheep.content}</CheepCardContent>
        <CheepCardActions>
          <div>
            <div>
              <MdOutlineChatBubbleOutline onClick={openReplyMenu} />
            </div>
            <div>{cheep.replies.length}</div>
          </div>
          <div>
            <div>
              <MdOutlineCached />
            </div>
            <div>{cheep.recheeps.length}</div>
          </div>
          <div>
            <div>{userLiked()}</div>
            <div>{cheep.likes.length}</div>
          </div>
        </CheepCardActions>
      </CheepCardContentContainer>
    </CheepCardContainer>
  );
}
