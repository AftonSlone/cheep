import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeCenter } from "../../Styles/Home/HomeCenter.style";
import { HomeContainer } from "../../Styles/Home/HomeContainer.style";
import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import { HomeRight } from "../../Styles/Home/HomeRight.style";
import {
  MdHome,
  MdAlternateEmail,
  MdMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import { Loader } from "../../Styles/Modal/Loader.style";
import { Modal } from "../Modal/Modal";
import ProfileButton from "./ProfileButton";
import CheepComposer from "./CheepComposer";
import CheepCard from "./CheepCard";
import EditCheep from "./EditCheep";
import CheepOptions from "./CheepOptions";
import ReplyModal from "../reply/ReplyModal";
import CheepModal from "./CheepModal";
import { updateNewCheep } from "../../store/cheep";
import { Link } from "react-router-dom";
import UserModal from "../Profile/UserModal";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.session.user);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const replyModal = useSelector((state) => state.reply.replyModal);
  const cheepModal = useSelector((state) => state.cheep.newCheep);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const userModal = useSelector((state) => state.session.userModal);
  const [cheeps, setCheeps] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        if (user) {
          setLoading(true);
          const res = await fetch(`/api/cheeps/user/${user.id}/timeline`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          setCheeps(data.data);
          setLoading(false);
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [timeline, user]);

  return (
    <>
      <CheepComposer setCheeps={setCheeps} />
      {loading && (
        <Loader>
          <div />
        </Loader>
      )}
      {cheeps &&
        cheeps.map((cheep) => <CheepCard cheepId={cheep.id} key={cheep.id} />)}

      {editCheepModal && (
        <Modal type="edit">
          <EditCheep setCheeps={setCheeps} />
        </Modal>
      )}

      {actionsModal && (
        <Modal type="edit">
          <CheepOptions setCheeps={setCheeps} />
        </Modal>
      )}

      {replyModal && (
        <Modal type="edit">
          <ReplyModal setCheeps={setCheeps} />
        </Modal>
      )}

      {cheepModal && (
        <Modal type="edit">
          <CheepModal setCheeps={setCheeps} />
        </Modal>
      )}

      {userModal && (
        <Modal type="edit">
          <UserModal />
        </Modal>
      )}
    </>
  );
}
