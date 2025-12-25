import LeftImagePanel from "../../components/auth/LeftImagePanel";
import LoginFormPanel from "../../components/auth/LoginFormPanel";

const LoginPage = () => {
  return (
    <>
      {/* Left Background - Cream */}
      <div className="login-left">
        <LeftImagePanel />
      </div>

      {/* Right Background - White */}
      <div className="login-right">
        <LoginFormPanel />
      </div>
    </>
  );
};

export default LoginPage;
