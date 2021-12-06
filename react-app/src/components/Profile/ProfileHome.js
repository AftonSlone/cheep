import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Styles/Modal/Loader.style";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal/Modal";
import CheepCard from "../Home/CheepCard";
import UserProfileCard from "./UserProfileCard";
import EditProfileModal from "./EditProfileModal";
import CheepModal from "../Home/CheepModal";
import CheepOptions from "../Home/CheepOptions";
import EditCheep from "../Home/EditCheep";
import ReplyModal from "../reply/ReplyModal";
import UserModal from "./UserModal";
import { fetchUser } from "../../store/session";

export default function ProfileHome() {
  const dispatch = useDispatch();
  const [loading] = useState(false);
  const user = useSelector((state) => state.session.user);
  const editProfile = useSelector((state) => state.profile.editProfileModal);
  const cheepModal = useSelector((state) => state.cheep.newCheep);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const userModal = useSelector((state) => state.session.userModal);
  const replyModal = useSelector((state) => state.reply.replyModal);
  const timeline = useSelector((state) => state.cheep.updateTimeline);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [timeline, dispatch, id]);

  return (
    <>
      {loading && (
        <Loader>
          <div />
        </Loader>
      )}
      {user && <UserProfileCard />}
      {user &&
        user.cheeps.map((cheep) => (
          <CheepCard cheepId={cheep.id} key={cheep.id} />
        ))}

      {editProfile && (
        <Modal type="edit">
          <EditProfileModal />
        </Modal>
      )}

      {cheepModal && (
        <Modal type="edit">
          <CheepModal />
        </Modal>
      )}

      {actionsModal && (
        <Modal type="edit">
          <CheepOptions />
        </Modal>
      )}

      {editCheepModal && (
        <Modal type="edit">
          <EditCheep />
        </Modal>
      )}

      {replyModal && (
        <Modal type="edit">
          <ReplyModal update={update} setUpdate={setUpdate} />
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
