import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Styles/Modal/Loader.style";
import { Modal } from "../Modal/Modal";
import CheepComposer from "./CheepComposer";
import CheepCard from "./CheepCard";
import EditCheep from "./EditCheep";
import CheepOptions from "./CheepOptions";
import ReplyModal from "../reply/ReplyModal";
import CheepModal from "./CheepModal";
import UserModal from "../Profile/UserModal";
import { fetchTimeline } from "../../store/cheep";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.session.user);
  const actionsModal = useSelector((state) => state.cheep.actionsMenu);
  const editCheepModal = useSelector((state) => state.cheep.editCheep);
  const replyModal = useSelector((state) => state.reply.replyModal);
  const cheepModal = useSelector((state) => state.cheep.newCheep);
  const updateTimeline = useSelector((state) => state.cheep.updateTimeline);
  const userModal = useSelector((state) => state.session.userModal);
  const cheeps = useSelector((state) => state.cheep.timeline);
  const setCheeps = false;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        if (user) {
          setLoading(true);
          await dispatch(fetchTimeline(user));
          setLoading(false);
        }
      })();
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [updateTimeline]);

  if (loading) {
    return (
      <>
        <CheepComposer />
        {loading && (
          <Loader>
            <div />
          </Loader>
        )}
      </>
    );
  }

  let count = 0;

  return (
    <>
      <CheepComposer />

      {cheeps &&
        cheeps.map((cheep) => {
          count++;
          return <CheepCard key={count} cheep={cheep} />;
        })}

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
