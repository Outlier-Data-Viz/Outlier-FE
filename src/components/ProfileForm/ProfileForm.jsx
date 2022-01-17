import { useEffect, useState } from "react";
// import { supabase } from '../../services/createClient';
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/Profile/ProfileCtx";
import useForm from "../../hooks/UseForm";
import LoginHooks from "../../hooks/UseLogin";
import { updateProfile } from "../../services/profile";


function ProfileForm() {
  const {formState, handleFormChange} = useForm({ username: '', avatar:''})
  const [create, setCreate] = useState(true);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const {profile, setProfile, authorized} = useProfile();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formState);
      await setProfile(formState);
      if(create) {
        await createProfile(profile.id, profile.email, { username: formState.username, avatar: formState.avatar});
      } else {
        await updateProfile(profile.id, profile.email, { username: formState.username, avatar: formState.avatar})
      }
      navigate('/profile')
    } catch(err) {
      setFormError(err.message);
    }
  };

  const handleToggle = () => {
    setActive(v => !v);
  };

  return (
    <>
    <h3>{profile.email}</h3>
    <h1>{create ? 'Create' : 'Edit'}</h1>
    {authorized ? 
    <form onSubmit={() => handleSubmit()}>
      <button onClick={() => console.log(profile)}>Test</button>
      <label htmlFor='username'>Username:</label>
      <input 
        id='username'
        name='username'
        type='username'
        onChange={(value) => handleFormChange(value)}
        value={formState.username}
      />
      <label htmlFor='avatar'>Avatar:</label>
      <input
        id='avatar'
        name='avatar' 
        type='avatar'
        value={formState.avatar}
        onChange={(value) => handleFormChange(value)} 
      />
      <button>Submit</button> 
      </form>
      :
      <LoginHooks />
    }
    </>
      
  )
}

export default ProfileForm;