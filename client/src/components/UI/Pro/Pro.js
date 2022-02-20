import Logo from "../Logo";
import Pcard from "../Pcard";
import classes from "./Pro.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const Premium = () => {
  return (
    <>
      <Logo />
      <Pcard>
        <h1>Pro Version</h1>
        <div className={classes.buyCont}>
          <a
            href="https://www.youtube.com/watch?v=_bSEfx6D8mA"
            target="_blank"
            rel="noreferrer noopener"
            // href="#"
          >
            BUY PREMIUM
          </a>

          <h2> Only $9.99 after. Cancel anytime.</h2>
          <p>
            <span>Terms and conditions apply.</span> 1 month free not available
            for users who have already tried Premium.
          </p>
        </div>
        <ul className={classes.ul}>
          <li>
            <h2>Why The Pro Version</h2>
          </li>
          <li>
            <AiOutlineCheck />
            <p>you............</p>
          </li>
          <li>
            <AiOutlineCheck />
            <p>you............</p>
          </li>
          <li>
            <AiOutlineCheck />
            <p>you............</p>
          </li>
        </ul>
      </Pcard>
    </>
  );
};

export default Premium;
