import RegisterLeftPanel from "../components/RegisterLeftPanel";
import CatDetailsFormPanel from "../components/CatDetailsFormPanel";

const CatDetailsPage = () => {
  return (
    <>
      {/* Left Background - Cream */}
      <div className="login-left">
        <RegisterLeftPanel activeStep={2} />
      </div>

      {/* Right Background - White */}
      <div className="login-right">
        <CatDetailsFormPanel />
      </div>
    </>
  );
};

export default CatDetailsPage;
