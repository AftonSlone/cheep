import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import {
  actionsMenu,
  editCheep,
  fetchDeleteCheep,
  singleCheep,
  updateCheepCard,
} from "../../store/cheep";
import { fetchUser } from "../../store/session";
import { CheepCardOptionsContainer } from "../../Styles/Cheep/CheepCardOptionsContainer.style";
import { Loader } from "../../Styles/Modal/Loader.style";
export default function CheepOptions({ setCheeps }) {
  const location = useLocation();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  const cheepCardUpdate = useSelector((state) => state.cheep.updateCheepCard);
  const dispatch = useDispatch();

  const following = () => {
    if (user.id === cheep.user_id) return null;
    for (const follower of user.following) {
      if (follower.followed_id === cheep.user_id)
        return (
          <div onClick={deleteFollow}>Unfollow {`@${cheep.user.username}`}</div>
        );
    }
    return <div onClick={addFollow}>Follow {`@${cheep.user.username}`}</div>;
  };

  const deleteFollow = async () => {
    await fetch(`/api/follows/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        follower_id: user.id,
        followed_id: cheep.user_id,
      }),
    });
    dispatch(fetchUser(user.id));
    dispatch(actionsMenu(false));
    return;
  };

  const addFollow = async () => {
    await fetch(`/api/follows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        follower_id: user.id,
        followed_id: cheep.user_id,
      }),
    });
    dispatch(fetchUser(user.id));
    dispatch(actionsMenu(false));
    return;
  };

  const deleteCheep = async () => {
    dispatch(actionsMenu(false));
    if (cheep.photos.length) {
      const res = await fetch(`/api/cheeps/${cheep.id}/photo`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      dispatch(fetchDeleteCheep(data));
      // dispatch(updateCheepCard(!cheepCardUpdate));
      return;
    }
    const res = await fetch(`/api/cheeps/${cheep.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch(fetchDeleteCheep(data));
    // dispatch(updateCheepCard(!cheepCardUpdate));
    if (location.pathname.includes("cheep")) {
      history.push("/home/home");
      return;
    }
    return;
  };

  const updateCheep = () => {
    dispatch(singleCheep(cheep));
    dispatch(editCheep(true));
    dispatch(actionsMenu(false));
  };

  if (!user)
    return (
      <CheepCardOptionsContainer>
        <Loader>
          <div />
        </Loader>
      </CheepCardOptionsContainer>
    );

  return (
    <CheepCardOptionsContainer>
      <span onClick={() => dispatch(actionsMenu(false))}>X</span>
      {following()}
      {user.id === cheep.user_id && <div onClick={deleteCheep}>Delete</div>}
      {user.id === cheep.user_id && <div onClick={updateCheep}>Update</div>}
    </CheepCardOptionsContainer>
  );
}
