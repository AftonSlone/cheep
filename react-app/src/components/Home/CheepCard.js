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
import { useHistory } from "react-router";

export default function CheepCard({ cheepId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const updateState = useSelector((state) => state.cheep.updateCheepCard);
  const [update, setUpdate] = useState(false);
  const [cheep, setCheep] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const res = await fetch(`/api/cheeps/${cheepId}`);
      const data = await res.json();
      if (mounted) setCheep(data);
    })();

    return () => {
      mounted = false;
    };
  }, [update, cheepId, updateState]);

  const handleLikes = async (e, cheep_id) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    if (id > 0) {
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

  const openActionsMenu = (e) => {
    e.stopPropagation();
    dispatch(singleCheep(cheep));
    dispatch(actionsMenu(true));
  };

  const openReplyMenu = (e) => {
    e.stopPropagation();
    dispatch(singleCheep(cheep));
    dispatch(updateReplyModal(true));
  };

  const link = (e, id) => {
    e.stopPropagation();
    history.push(`/cheep/${id}`);
  };

  if (!cheep)
    return (
      <CheepCardContainer>
        <Loader>
          <div />
        </Loader>
      </CheepCardContainer>
    );

  return (
    <CheepCardContainer onClick={(e) => link(e, cheep.id)}>
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
