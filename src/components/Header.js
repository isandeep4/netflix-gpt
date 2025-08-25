import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
    dispatch(removeUser());
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribeAuthCallback = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, name } = user;
        dispatch(addUser({ uid: uid, name: name, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribeAuthCallback();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
      <img
        className="w-28 md:w-44 mx-auto md:mx-8"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      <div className="flex justify-center md:justify-between">
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg z-10"
          onClick={() => handleGptSearchClick()}
        >
          {!showGptSearch ? "GPT Search" : "Home Page"}
        </button>
        <button
          className="py-2 px-4 mx-4 my-2 font-bold text-red-500 z-10"
          onClick={() => handleClick()}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
