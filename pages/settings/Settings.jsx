import { Sidebar } from "../../components";

function Settings() {
  return (
    <div className="srttings">
      <div className="container">
        <div className="settings__inner">
          <div className="settings__content">
            <div className="settings__top">
              <span className="settings__update">Update Your Acount</span>
              <span className="settings__del">Delete Your Acount</span>
            </div>
            <form className="settings__form">
              <label>Profile Image</label>
              <div className="settings__profile-img">
                <img
                  src="https://avatarko.ru/img/kartinka/31/muzhchina_shlyapa_galstuk_30949.jpg"
                  alt=""
                />
                <label htmlFor="settingsUserIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#061e37"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                  </svg>
                </label>
                <input
                  className="settings__user-icon-input"
                  type="file"
                  id="settingsUserIcon"
                />
              </div>
              <label>
                Email
                <input type="email" placeholder="email" />
              </label>
              <label>
                Username
                <input type="text" placeholder="Your Username" />
              </label>
              <label>
                Password
                <input type="Password" placeholder="Your Password" />
              </label>

              <button className="settings__submit" type="submit">
                Publish
              </button>
            </form>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Settings;
