const plans = [
  {
    id: "123",
    name: "Plan A"
  },
  {
    id: "456",
    name: "Plan B"
  },
  {
    id: "789",
    name: "Plan C"
  }
];

const plansDetails = [
  {
    id: "123",
    name: "Plan A",
    premium: 1000,
    deductible: 1500,
    maxOutOfPocket: 3000
  },
  {
    id: "456",
    name: "Plan B",
    premium: 500,
    deductible: 3000,
    maxOutOfPocket: 3000
  },
  {
    id: "789",
    name: "Plan C",
    premium: 2500,
    deductible: 700,
    maxOutOfPocket: 3000
  }
];

export const loadPlans = async (state) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(plans);
    }, 1000);
  });
};

export const loadPlanDetails = (planId) => {
  return new Promise((resolve) => {
    const data = plansDetails.find((plan) => plan.id === planId);
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
