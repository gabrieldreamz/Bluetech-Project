import "../styles/loader.css";

import noDataImage from "../assets/images/noData.png";

export default function NotData() {
  return (
    <div className="loader-container no-data">
      <img src={noDataImage} alt="" width={300} />
      <p>Something went wrong</p>
    </div>
  );
}
