import RegisterLeftPanel from "../../components/auth/RegisterLeftPanel";
import RegisterFormPanel from "../../components/auth/RegisterFormPanel";

const RegisterPage = () => {
  return (
    <>
      {/* Left Background - Cream */}
      <div className="login-left">
        <RegisterLeftPanel />
      </div>

      {/* Right Background - White */}
      <div className="login-right">
        <RegisterFormPanel />
      </div>
    </>
  );
};

export default RegisterPage;
