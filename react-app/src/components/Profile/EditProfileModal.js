import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEditProfileModal } from "../../store/profile";
import { ErrorContainer } from "../../Styles/Auth/ErrorContainer.style";
import { EditFormContainer } from "../../Styles/Profile/EditFormContainer.style";

export default function EditProfileModal() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <EditFormContainer>
      <span onClick={() => dispatch(updateEditProfileModal(false))}>X</span>
      {errors && (
        <ErrorContainer>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </ErrorContainer>
      )}
    </EditFormContainer>
  );
}
