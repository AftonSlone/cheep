import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
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
import { singleCheep, updateNewCheep } from "../../store/cheep";
import { Modal } from "../Modal/Modal";
import ReplyCard from "./ReplyCard";
import ReplyOptions from "./ReplyOptions";
import EditReply from "./EditReply";
import ReplyModal from "./ReplyModal";
import CheepModal from "../Home/CheepModal";
import UserModal from "../Profile/UserModal";
import CheepOptions from "../Home/CheepOptions";
import EditCheep from "../Home/EditCheep";

export default function ReplyHome() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading] = useState(false);
  const [update, setUpdate] = useState(false);
  const replyActionsModal = useSelector((state) => state.reply.actionsMenu);
  const editReply = useSelector((state) => state.reply.editReply);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const replyModal = useSelector((state) => state.reply.replyModal);
  const cheepModal = useSelector((state) => state.cheep.newCheep);
  const replies = useSelector((state) => state.cheep.singleCheep);
  const user = useSelector((state) => state.session.user);
  const userModal = useSelector((state) => state.session.userModal);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const updateState = useSelector((state) => state.cheep.updateCheepCard);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        const res = await fetch(`/api/cheeps/${id}`);
        if (res.status > 400) {
          history.push("/home");
          return;
        }
        const data = await res.json();
        dispatch(singleCheep(data));
      })();
    }
    return () => {
      mounted = false;
    };
  }, [update, updateState, dispatch, id, history]);

  return (
    <HomeContainer>
      <HomeLeft>
        <Link to="/home">
          <BsTwitter />
        </Link>
        <Link to="/home">
          <MdHome /> Home
        </Link>
        <Link to="/home">
          <MdAlternateEmail /> Mentions
        </Link>
        <Link to="/home">
          <MdMailOutline /> Messages
        </Link>
        <Link to={`/user/${user.id}`}>
          <MdPersonOutline /> Profile
        </Link>
        <HomeButton onClick={() => dispatch(updateNewCheep(true))}>
          Cheep
        </HomeButton>
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
            <EditCheep />
          </Modal>
        )}

        {editReply && (
          <Modal type="edit">
            <EditReply update={update} setUpdate={setUpdate} />
          </Modal>
        )}

        {replyActionsModal && (
          <Modal type="edit">
            <ReplyOptions update={update} setUpdate={setUpdate} />
          </Modal>
        )}

        {replyModal && (
          <Modal type="edit">
            <ReplyModal update={update} setUpdate={setUpdate} />
          </Modal>
        )}

        {cheepModal && (
          <Modal type="edit">
            <CheepModal />
          </Modal>
        )}

        {userModal && (
          <Modal type="edit">
            <UserModal />
          </Modal>
        )}

        {actionsModal && (
          <Modal type="edit">
            <CheepOptions />
          </Modal>
        )}
      </HomeCenter>
      <HomeRight></HomeRight>
    </HomeContainer>
  );
}
