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
import { Link } from "react-router-dom";

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
    // if (e.target.id != "link") history.push(`/cheep/${id}`);
    history.push(`/cheep/${id}`);
  };

  // const handleImage = async () => {
  //   const res = await fetch(`/api/cheep_photos/${cheep.photos[0].photo_url}`);
  //   const data = await res.json();
  //   return data;
  // };

  const handleProfileImg = () => {
    if (cheep.user.profile_photo.includes("lorempixel.com"))
      return "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
    return cheep.user.profile_photo;
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
        <img src={handleProfileImg()} alt="" className="avatar" />
      </CheepCardProfilePhoto>
      <CheepCardContentContainer>
        <CheepCardUsername>
          {
            <Link
              to={`/user/${cheep.user.id}`}
              id="link"
            >{`@${cheep.user.username}`}</Link>
          }{" "}
          <div onClick={openActionsMenu}>. . .</div>
        </CheepCardUsername>
        <CheepCardContent>
          <div className="cheepContentWrapper">{cheep.content}</div>

          <div className="cheepPhotoWrapper">
            {cheep.photos.length > 0 && (
              <img
                src={cheep.photos[0].photo_url}
                alt=""
                className="cheepPhoto"
              />
            )}
          </div>
        </CheepCardContent>
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
