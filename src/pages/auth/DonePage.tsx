import RegisterLeftPanel from "../../components/auth/RegisterLeftPanel";
import DoneFormPanel from "../../components/auth/DoneFormPanel";

const DonePage = () => {
  return (
    <>
      {/* Left Background - Cream */}
      <div className="login-left">
        <RegisterLeftPanel activeStep={3} />
      </div>

      {/* Right Background - White */}
      <div className="login-right">
        <DoneFormPanel />
      </div>
    </>
  );
};

export default DonePage;
