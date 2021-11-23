import { useDispatch } from "react-redux";
import { Loader } from "../../Styles/Modal/Loader.style";
import { CheepCardContainer } from "../../Styles/Cheep/CheepCardContainer.style";
import { CheepCardProfilePhoto } from "../../Styles/Cheep/CheepCardProfilePhoto.style";
import { CheepCardUsername } from "../../Styles/Cheep/CheepCardUsername.style";
import { CheepCardContentContainer } from "../../Styles/Cheep/CheepCardContentContainer.style";
import { CheepCardContent } from "../../Styles/Cheep/CheepCardContent.style";
import { CheepCardActions } from "../../Styles/Cheep/CheepCardActions.style";
import { actionsMenu } from "../../store/cheep";
import { updateSingleReply } from "../../store/reply";
import { useHistory } from "react-router";

export default function ReplyCard({ cheep }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openActionsMenu = (e) => {
    e.stopPropagation();
    dispatch(updateSingleReply(cheep));
    dispatch(actionsMenu(true));
  };

  const link = (e, id) => {
    e.stopPropagation();
    history.push(`/cheep/${id}`);
  };

  if (!cheep)
    return (
      <CheepCardContainer>
        <Loader />
      </CheepCardContainer>
    );

  return (
    <CheepCardContainer onClick={(e) => link(e, cheep.id)}>
      <CheepCardProfilePhoto>
        <img src={cheep.user.profile_photo} alt="" />
      </CheepCardProfilePhoto>
      <CheepCardContentContainer>
        <CheepCardUsername>
          {`@${cheep.user.username}`} <div onClick={openActionsMenu}>. . .</div>
        </CheepCardUsername>
        <CheepCardContent>{cheep.content}</CheepCardContent>
        <CheepCardActions></CheepCardActions>
      </CheepCardContentContainer>
    </CheepCardContainer>
  );
}
