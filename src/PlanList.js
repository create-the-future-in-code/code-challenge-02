import { useEffect, useState } from "react";
import { loadPlans } from "./api";

export default function PlanList({ comparePlans }) {
  const [plans, setPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPlans() {
      const data = await loadPlans("VA");
      setPlans(data);
      setLoading(false);
    }
    fetchPlans();
  }, []);

  const handleCompare = () => {
    comparePlans(selectedPlans);
  };

  const handleAddItemForCompare = (event) => {
    // TODO: handle plan select/unselect for compare
  };

  return (
    <>
      <h1>Available Plans</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {plans.map((plan, index) => (
            <li key={`plan-list-${index}`}>
              {plan.name}{" "}
              <input
                type="checkbox"
                onChange={handleAddItemForCompare}
                value={plan.id}
              ></input>
            </li>
          ))}
        </ul>
      )}
      <div>
        Selected Plans:{" "}
        <ul>
          {selectedPlans.map((plan, index) => (
            <li key={`selection-list-${index}`}>{plan.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleCompare}>Compare</button>
    </>
  );
}
