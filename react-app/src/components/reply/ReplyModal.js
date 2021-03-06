import React from 'react';
import { useDispatch } from 'react-redux';
import { updateReplyModal } from '../../store/reply';
import { ReplyModalContainer } from '../../Styles/Reply/ReplyModalContainer.style';
import ReplyCheepCard from './ReplyCheepCard';
import ReplyComposer from './ReplyComposer';

export default function ReplyModal() {
  const dispatch = useDispatch();
  return (
    <ReplyModalContainer>
      <span onClick={() => dispatch(updateReplyModal(false))}>X</span>
      <ReplyCheepCard />
      <ReplyComposer/>
    </ReplyModalContainer>
  );
}
