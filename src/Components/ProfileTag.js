import "./ProfileTag.scss";
import { useMemo } from "react";

const ProfileTag = ({ text }) => {
  const colors = [
    {
      name: "green",
      hex_code: "#23A640",
    },
    {
      name: "purple",
      hex_code: "#8D64E4",
    },
    {
      name: "orange",
      hex_code: "#E46464",
    },
  ];

  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  return (
    <div
      className="ProfileTag"
      style={{
        borderColor: randomColor.hex_code,
        color: randomColor.hex_code,
      }}
    >
      {text}
    </div>
  );
};

export default ProfileTag;
