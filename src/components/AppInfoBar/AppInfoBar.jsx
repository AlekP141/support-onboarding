import { useContext } from "react";
import { QuestionContext } from "../../App";
import { APPLICATION_LIST } from "../consts";

export const AppInfoBar = () => {
  const [question, setQuestion] = useContext(QuestionContext);

  return (
    <div className="app-info-bar">
      <h2>Apps</h2>
      <div className="app-info-container">
        <div className="algolia-account-overview flex-group">
          <img alt="" src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/logo-small.png" />
          <p>Algolia Account Overview</p>
        </div>
        <div className="algolia-org">
          <div className="algolia-app-subtitle">
            <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/briefcase-solid.svg" alt="" />
            <h3>Organization</h3>
          </div>
          <ul className="algolia-org-info">
            <li>
              <strong>ARR:</strong>
            </li>
            <li>
              <strong>Main Account Plan:</strong>
            </li>
            <li>
              <strong>AE:</strong>
            </li>
            <li>
              <strong>CS Contact:</strong>
            </li>
            <li>
              <strong>CS Coverage:</strong>
            </li>
          </ul>
        </div>
        <div className="algolia-user-info">
          <div className="algolia-app-subtitle">
            <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/user-solid.svg" alt="" />
            <div className="algolia-user">
              <h3>User</h3>
              <a href="">Admin link</a>
            </div>
          </div>
          <div className="algolia-perso-indicator">
            <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/check-circle-solid.svg" alt="" />
            <p>User can be personified.</p>
          </div>
          <ul className="algolia-user-info-list">
            <li>
              <strong>Created at:</strong> Oct 14, 2024
            </li>
          </ul>
        </div>
        <div className="algolia-applications-container">
          <div className="algolia-app-subtitle">
            <img src="https://819835.apps.zdusercontent.com/819835/assets/1707464129-4e56f77cdbf4d416015fc01216d6b0e0/icons/folder-open-solid.svg" alt="" />
            <h3>Applications</h3>
          </div>
          <ul className="algolia-applications-list">
            {APPLICATION_LIST.map((app) => {
              return (
                <a key={app.appID} href={`https://admin.algolia.com/admin/users/810007/applications/${app.appID}`}>
                  <li>{app.appID}</li>
                  {app.type === "shopify" ? <div className="shopify" /> : null}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
