import "../styles/RequiredInfo.css";
import CancelLeaveIcon from "../assets/svg/cancelLeaveIcon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img
        src={CancelLeaveIcon}
        className="clipboard-icon"
        width="24"
        height="26"
        alt="Cancel Leave Icon"
      />
      <span className="required-text">Leave Approval</span>
    </div>
  );
};

export default RequiredInfo;
