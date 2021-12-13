import { useEffect, useState } from "react";
import { loadPlanDetails } from "./api";

export default function ComparePlans({ plansToCompare, goBack }) {
  const [planDetails, setPlanDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPlanDetails() {
      // TODO: Load plan details
      setLoading(false);
    }
    fetchPlanDetails();
  }, []);

  const handleBack = () => {
    goBack();
  };

  return (
    <>
      <h1>Compare Plans</h1>
      <button onClick={handleBack}>Go Back</button>
      {loading ? <div>loading...</div> : <div>{"Plan Details Go Here!"}</div>}
    </>
  );
}
