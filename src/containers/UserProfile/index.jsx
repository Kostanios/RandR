import React from 'react';
import styles from './styles.module.scss';
import LogInUser from 'components/Svg/LogInUser';
import ActionButton from 'components/ActionButton';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.userBlokContainer}>
          <div className={styles.userBlok}>
            <div className={styles.profileImgContainer}>
              <LogInUser />
            </div>
            <p className={styles.userTelephone}>{user.phone}</p>
            <p className={styles.userName}>{user.profile.name}</p>
          </div>
          <div className={styles.actionsContainer}>
            <ActionButton buttonText={'выйти'} />
            <ActionButton buttonText={'сохранить'} />
          </div>
        </div>
        <div className={styles.userInfoContainer}>
          <div className={styles.personalData}>
            <p>Личные данные</p>
            <div>
              <div className={styles.changeContainer}>
                <div>
                  <div className={styles.inputLabel}>{'Имя'}</div>
                  <input
                    placeholder={user.firsName}
                    className={styles.changeInfo}
                  ></input>
                </div>
                <div>
                  <div className={styles.inputLabel}>{'Фамилия'}</div>
                  <input
                    placeholder={user.lastName}
                    className={styles.changeInfo}
                  ></input>
                </div>
              </div>
              <div className={styles.changeContainer}>
                <div>
                  <div className={styles.inputLabel}>{'Номер телефона'}</div>
                  <input
                    placeholder={user.phone}
                    className={styles.changeInfo}
                  ></input>
                </div>
                <div>
                  <div className={styles.inputLabel}>{'Почта'}</div>
                  <input
                    placeholder={user.profile.emal}
                    className={styles.changeInfo}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
