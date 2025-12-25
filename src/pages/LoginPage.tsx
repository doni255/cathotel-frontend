import LeftImagePanel from "../components/LeftImagePanel";
import LoginFormPanel from "../components/LoginFormPanel";

const LoginPage = () => {
  return (
    <>
      {/* Left Background - Cream (matches LeftImagePanel) */}
      <div className="login-left">
        <LeftImagePanel />
      </div>

      {/* Right Background - White (matches LoginFormPanel) */}
      <div className="login-right">
        <LoginFormPanel />
      </div>
    </>
  );
};

export default LoginPage;
