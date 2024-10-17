import { doSocialLogin } from "../app/actions/index";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-black text-white p-1 rounded-md m1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign in with Google
      </button>
    </form>
  );
};

export default SocialLogin;
