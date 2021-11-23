import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReplyModal } from "../../store/reply";
import { ReplyModalContainer } from "../../Styles/Reply/ReplyModalContainer.style";
import {
  MdOutlineChatBubbleOutline,
  MdOutlineCached,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import CheepCard from "../Home/CheepCard";
import ReplyCheepCard from "./ReplyCheepCard";
import ReplyComposer from "./ReplyComposer";

export default function ReplyModal({setCheeps}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cheep = useSelector((state) => state.cheep.singleCheep);
  return (
    <ReplyModalContainer>
      <span onClick={() => dispatch(updateReplyModal(false))}>X</span>
      <ReplyCheepCard />
      <ReplyComposer setCheeps={setCheeps}/>
    </ReplyModalContainer>
  );
}
