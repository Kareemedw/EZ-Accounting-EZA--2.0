const baseUrl = "http://localhost:4001";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getBudgets = () => {
  return fetch(`${baseUrl}/cards`).then(checkResponse);
};

export const createBudget = (budget) => {
  return fetch(`${baseUrl}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budget),
  }).then(checkResponse);
};

export const updateBudget = (budgetId, budgetData) => {
  return fetch(`${baseUrl}/cards/${budgetId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetData),
  }).then(checkResponse);
};

export const deleteBudget = (budgetId) => {
  return fetch(`${baseUrl}/cards/${budgetId}`, {
    method: "DELETE",
  }).then(checkResponse);
};
