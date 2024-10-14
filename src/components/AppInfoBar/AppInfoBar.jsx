export const AppInfoBar = () => {
  return (
    <div className="app-info-bar">
      <div className="app-info-container">
        <div className="algolia-account-overview flex-group">
          <img alt="" src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/logo-small.png" />
          <p>Algolia Account Overview</p>
        </div>
        <div className="algolia-org">
          <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/briefcase-solid.svg" alt="" />
          <h3>Organization</h3>
        </div>
        <div className="algolia-user-info">
          <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/user-solid.svg" alt="" />
          <div className="algolia-user">
            <h3>User</h3>
            <a href="">Admin link</a>
          </div>
        </div>
        <div className="algolia-applications-container">
          <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/folder-open-solid.svg" alt="" />
          <h3>Applications</h3>
        </div>
      </div>
    </div>
  );
};
