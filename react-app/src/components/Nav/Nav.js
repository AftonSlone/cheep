import { HomeLeft } from "../../Styles/Home/HomeLeft.style";
import {
  MdHome,
  MdAlternateEmail,
  MdMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { HomeButton } from "../../Styles/Home/HomeButton.style";
import ProfileButton from "../Home/ProfileButton";
import { updateNewCheep } from "../../store/cheep";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  return (
    <HomeLeft>
      <div className="navlinkcontainer">
        <Link to="/home/home">
          <BsTwitter className="icon" />
        </Link>
        <Link to="/home/home">
          <MdHome className="icon" /> Home
        </Link>
        <Link to={`/home/user/${user.id}/mentions`}>
          <MdAlternateEmail className="icon" /> Mentions
        </Link>
        <Link to="/home/home">
          <MdMailOutline className="icon" /> Messages
        </Link>
        <Link to={`/home/user/${user.id}`}>
          <MdPersonOutline className="icon" /> Profile
        </Link>
        <HomeButton onClick={() => dispatch(updateNewCheep(true))}>
          Cheep
        </HomeButton>
      </div>
      <ProfileButton />
    </HomeLeft>
  );
}
