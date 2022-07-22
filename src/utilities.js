/*------------generate ids for transaction object ----------------*/
localStorage.setItem('ids', {
  userIds: userIds,
  
})
let userIds = [];
let tillIds = [];
let transactionIds = [];

const idTypes = {
  user: "user",
  till: "till",
  transaction: "transaction",
};

export const generateIds = () => {
  let userId = "";
  let tillId = "";
  let transactionId = "";
  userId = `$u${Math.floor(Math.random() * 100000000).toString()}`;
  if (!userIds.includes(userId)) userIds.push(userId);

  tillId = `$t${Math.floor(Math.random() * 100000000).toString()}`;
  if (!tillIds.includes(tillId)) tillIds.push(tillId);

  transactionId = `$trs${Math.floor(Math.random() * 100000000).toString()}`;
  if (!transactionIds.includes(transactionId))
    transactionIds.push(transactionId);
  return {
    userId: userId,
    tillId: tillId,
    transacitionId: transactionId,
  };
};

/* ----------------Transactions -----------------------*/

export const createTransaction = async (transaction, transactions, setTransactions) => {
  if (transactions) {
    setTransactions([...transactions, transaction]);
    console.log('Tansactions a')
  }
};