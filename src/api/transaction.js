// import axios from "axios";

export const getTransactions = async () => {
  const response = await fetch("/transactions", {
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  // console.log("response", response);

  const jsonResponse = await response.json();
  // console.log("transaction_id", jsonResponse);
  return await jsonResponse;
};

export const createTransaction = async (transaction) => {
  const data = JSON.stringify(transaction);

  const response = await fetch("/transactions", {
    methode: "POST",
    body: data,
  });
  return "New transaction successufully created";
};
