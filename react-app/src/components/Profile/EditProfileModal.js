import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEditProfileModal } from "../../store/profile";
import { AuthButton } from "../../Styles/Auth/AuthButton.style";
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

      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />

      <textarea
        name="bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        placeholder="Bio"
      />
      <AuthButton>Edit</AuthButton>
    </EditFormContainer>
  );
}
