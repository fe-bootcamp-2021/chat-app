import React from 'react';
import { Arrow, Logout, Pen } from '../Icons/icons';
import Button from '../Button/Button';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';
import { useAuth } from '../../hooks/useAuth.hook';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/routes.constant';
import classes from './Settings.module.css';

function Settings({ handleSettingsClick }) {
  const { signout } = useAuth();
  const history = useHistory();

  const handleSubmit = () => {
    history.replace(routes.login().route);
    signout();
  };

  return (
    <div className={classes.settings}>
      <div className={classes.settingsHeader}>
        <Button
          btnName={<Arrow />}
          className={classes.backBtn}
          onClick={handleSettingsClick}></Button>
        <Button btnName={<Logout />} onClick={handleSubmit}></Button>
      </div>
      <div className={classes.settingsAbout}>
        <div className={classes.circle}></div>
        <div className={classes.fullName}>Name Surname</div>
        <div className={classes.email}>namesurname2000@gmail.com</div>
      </div>
      <NewChatMenuRow rowContent={<Pen />} rowName={'Edit Profile'} />
    </div>
  );
}

export default Settings;
