import RegisterLeftPanel from "../components/RegisterLeftPanel";
import DoneFormPanel from "../components/DoneFormPanel";

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
