import { useState } from "react";
import "./styles.css";

import PlanList from "./PlanList";
import ComparePlans from "./ComparePlans";

export default function App() {
  const [isComparing, setIsComparing] = useState(false);
  const [plans, setPlans] = useState(undefined);

  const handleComparePlans = (plansToCompare) => {
    setPlans(plansToCompare);
    setIsComparing(true);
  };

  const handleGoBack = () => {
    setPlans(undefined);
    setIsComparing(false);
  };

  return (
    <div className="App">
      {isComparing ? (
        <ComparePlans plansToCompare={plans} goBack={handleGoBack} />
      ) : (
        <PlanList comparePlans={handleComparePlans} />
      )}
    </div>
  );
}
