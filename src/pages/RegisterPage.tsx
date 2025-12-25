import RegisterLeftPanel from "../components/RegisterLeftPanel";
import RegisterFormPanel from "../components/RegisterFormPanel";

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
