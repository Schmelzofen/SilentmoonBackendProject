import Logo from "../../components/UI/Logo";
import Pcard from "../../components/UI/Pcard";
import DataLocalStorage from "../../components/LocalStorage/DataLocalStorage";
import FlexForFavs from "../../components/UI/FlexForFavs";
import ProfilePic from "../../components/UI/profile/ProfilePic";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  // fetche favorites
  return (
    <>
      <Logo />
      <Pcard>
        <ProfilePic />
        <h2>Your favevorites lists</h2>
        <FlexForFavs>
          <DataLocalStorage />
        </FlexForFavs>
      </Pcard>
      <Footer />
    </>
  );
};

export default Profile;
