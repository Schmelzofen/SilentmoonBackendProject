import { useContext } from "react";
import TokenContent from "../../../store/token-provider";
import classes from "./ProfilePic.module.css";

const ProfilePic = (props) => {
  const tokenCtx = useContext(TokenContent);
  console.log(tokenCtx)
  return (
    <div className={classes.container}>
      <div>
        <img
          src={`${tokenCtx?.token?.user?.image ? tokenCtx?.token?.user?.image : tokenCtx?.token?.findUser?.image}`}
          alt="face"
        />
      </div>
      <h1>{`${tokenCtx?.token?.user?.name ? tokenCtx?.token?.user?.name : tokenCtx?.token?.findUser?.name}`}</h1>
    </div>
  );
};

export default ProfilePic;
