import styled from "styled-components";

export const CheepCardContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(245, 248, 250, 0.3);
  border-bottom: 1px solid rgba(245, 248, 250, 0.3);

  .avatar {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .cheepPhoto {
    max-height: 100%;
    max-width: 100%;
  }
`;
