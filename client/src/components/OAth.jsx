import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { postSignInByGoogle } from "../../services/services";
const OAth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const payload = JSON.stringify({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });

      const { data } = await postSignInByGoogle(payload);
      dispatch(signInSuccess(data));
      navigate("/");
      toast.success("Success.");
    } catch (error) {
      toast.error(`Failed! could not sign in with google', ${error}`);
      console.log("could not sign in with google", error);
    }
  };
  return (
    <div className="max-w-lg mx-auto">
         <Toaster position="top-center" reverseOrder />
   
    <button
      onClick={handleGoogleClick}
      type="button"
      style={{ width: '485px' }}
      className="w-full bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
    </div>
  );
};

export default OAth;
