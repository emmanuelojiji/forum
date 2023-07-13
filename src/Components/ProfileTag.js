import "./ProfileTag.scss";
const ProfileTag = () => {
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

  const randomColor = Math.floor(Math.random() * colors.length);
  console.log();

  return (
    <div
      className="ProfileTag"
      style={{
        borderColor: colors[randomColor].hex_code,
        color: colors[randomColor].hex_code,
      }}
    >
      Product Designer
    </div>
  );
};

export default ProfileTag;
