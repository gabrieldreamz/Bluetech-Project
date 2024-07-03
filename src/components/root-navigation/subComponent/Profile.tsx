import { Bell, DownArrow } from "../../../assets";
import profileImage from "../../../assets/images/white-doctor.jpeg";

export default function Profile() {
  return (
    <div className="main-navigation__profile">
      <span className="main-navigation__profile-notification">
        <Bell />
      </span>

      <div>
        <span className="main-navigation__profile-image">
          <img src={profileImage} alt="Doctor with ipad" width={80} />
        </span>
        <span className="main-navigation__profile-details">
          <p>Gabriel Udealor</p>
          <DownArrow />
        </span>
      </div>
    </div>
  );
}
