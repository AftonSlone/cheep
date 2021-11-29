import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEditProfileModal } from "../../store/profile";
import { fetchUser } from "../../store/session";
import { AuthButton } from "../../Styles/Auth/AuthButton.style";
import { ErrorContainer } from "../../Styles/Auth/ErrorContainer.style";
import { EditFormContainer } from "../../Styles/Profile/EditFormContainer.style";

export default function EditProfileModal() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState(null);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const onEdit = async () => {
    const res = await fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        bio,
      }),
    });

    const data = await res.json();
    if (data.errors) setErrors(data.errors);
    if (!data.errors) {
      dispatch(fetchUser(user.id));
      dispatch(updateEditProfileModal(false));
    }
  };

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
      <AuthButton onClick={onEdit}>Edit</AuthButton>
    </EditFormContainer>
  );
}
