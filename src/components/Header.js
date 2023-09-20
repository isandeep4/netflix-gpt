import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribeAuthCallback = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, name } = user;
          dispatch(addUser({uid: uid, name: name, email: email}));  
          navigate("/browse");  
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribeAuthCallback();
}, [])

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full ">
      <img 
      className='w-44'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo"/>
    </div>
  )
}
export const headerWithLogOut = (Header) => {
  return () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
      signOut(auth).then(()=>{
        navigate("/");
      }).catch((err)=>console.log(err))
      dispatch(removeUser());
    }
    return (
      <div className='flex justify-between'>
        <Header />
        <button className='absolute font-bold text-red-500 z-10 right-0' onClick={() => handleClick()}>Log out</button>
      </div>
    )
  }
};

export default Header;