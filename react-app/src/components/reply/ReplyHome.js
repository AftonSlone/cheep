import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Loader } from "../../Styles/Modal/Loader.style";
import CheepCard from "../Home/CheepCard";
import { useDispatch, useSelector } from "react-redux";
import { singleCheep } from "../../store/cheep";
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
  const cheep = useSelector((state) => state.cheep.singleCheep);
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
          history.push("/home/home");
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
    <>
      {loading && (
        <Loader>
          <div />
        </Loader>
      )}
      {id && <CheepCard cheep={cheep} />}

      {cheep &&
        cheep.replies.map((reply) => (
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
    </>
  );
}
