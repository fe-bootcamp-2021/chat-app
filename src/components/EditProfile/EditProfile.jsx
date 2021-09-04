import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Arrow } from '../Icons/icons';
import classes from './EditProfile.module.css';
import { types } from '../../constants/formTypes.constant';

function EditProfile({ setIsEditProfileOpen }) {
  const handleBackBtn = () => {
    setIsEditProfileOpen(false);
  };
  return (
    <div className={classes.editProfile}>
      <div className={classes.editProfileHeader}>
        <Button btnName={<Arrow />} className={classes.backBtn} onClick={handleBackBtn} />
        <p className={classes.headerTitle}>Edit Profile</p>
      </div>
      <div className={classes.editProfileAvatar}>Choose Avatar</div>
      <Input
        id={types.input.name.id}
        name={types.input.name.name}
        type={types.input.name.type}
        label={types.input.name.label}
        variant={'secondary'}
      />
      <Input
        id={types.input.surname.id}
        name={types.input.surname.name}
        type={types.input.surname.type}
        label={types.input.surname.label}
        variant={'secondary'}
      />
      <Input
        id={types.input.email.id}
        name={types.input.email.name}
        type={types.input.email.type}
        label={types.input.email.label}
        variant={'secondary'}
      />
    </div>
  );
}

export default EditProfile;
