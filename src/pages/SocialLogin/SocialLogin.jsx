import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProviders";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="hover:bg-slate-500 hover:text-white rounded-xl hover:border-slate-500 border-zinc-950 gap-2"
      >
        <FaGoogle /> Google
      </Button>
    </div>
  );
};

export default SocialLogin;
