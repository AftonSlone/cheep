import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import {
  MdHome,
  MdAlternateEmail,
  MdMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import ProfileButton from "../Home/ProfileButton";
import CheepCard from "../Home/CheepCard";
import { useDispatch, useSelector } from "react-redux";
import ReplyCheepCard from "./ReplyCheepCard";
import { singleCheep } from "../../store/cheep";
import CheepOptions from "../Home/CheepOptions";
import EditCheep from "../Home/EditCheep";
import { Modal } from "../Modal/Modal";
import ReplyCard from "./ReplyCard";
import ReplyOptions from "./ReplyOptions";
import EditReply from "./EditReply";

export default function ReplyHome() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const replyModal = useSelector((state) => state.reply.replyModal);
  const replies = useSelector((state) => state.cheep.singleCheep);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        const res = await fetch(`/api/cheeps/${id}`);
        const data = await res.json();
        dispatch(singleCheep(data));
      })();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <HomeContainer>
      <HomeLeft>
        <a href="/home">
          <BsTwitter />
        </a>
        <a href="/home">
          <MdHome /> Home
        </a>
        <a href="/home">
          <MdAlternateEmail /> Mentions
        </a>
        <a href="/home">
          <MdMailOutline /> Messages
        </a>
        <a href="/home">
          <MdPersonOutline /> Profile
        </a>
        <HomeButton>Cheep</HomeButton>
        <ProfileButton />
      </HomeLeft>
      <HomeCenter>
        {loading && (
          <Loader>
            <div />
          </Loader>
        )}
        {id && <CheepCard cheepId={id} />}

        {replies &&
          replies.replies.map((reply) => (
            <ReplyCard key={reply.id} cheep={reply} />
          ))}

        {editCheepModal && (
          <Modal type="edit">
            <EditReply  />
          </Modal>
        )}

        {actionsModal && (
          <Modal type="edit">
           <ReplyOptions />
          </Modal>
        )}

        {/* {replyModal && (
          <Modal type="edit">
            <ReplyModal setCheeps={setCheeps} />
          </Modal>
        )} */}
      </HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
