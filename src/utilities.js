/*------------generate ids for transaction object ----------------*/
// localStorage.setItem('ids', {
//   userIds: userIds,
  
// })
// let userIds = [];
// let tillIds = [];
// let transactionIds = [];

// const idTypes = {
//   user: "user",
//   till: "till",
//   transaction: "transaction",
// };

// export const generateIds = () => {
//   let userId = "";
//   let tillId = "";
//   let transactionId = "";
//   userId = `$u${Math.floor(Math.random() * 100000000).toString()}`;
//   if (!userIds.includes(userId)) userIds.push(userId);

//   tillId = `$t${Math.floor(Math.random() * 100000000).toString()}`;
//   if (!tillIds.includes(tillId)) tillIds.push(tillId);

//   transactionId = `$trs${Math.floor(Math.random() * 100000000).toString()}`;
//   if (!transactionIds.includes(transactionId))
//     transactionIds.push(transactionId);
//   return {
//     userId: userId,
//     tillId: tillId,
//     transacitionId: transactionId,
//   };
// };

/* ----------------Transactions -----------------------*/

export const createTransaction = async (transaction, transactions, setTransactions) => {
  if (transactions) {
    setTransactions([...transactions, transaction]);
    console.log('Tansactions a')
  }
};

/* ----------------Transactions -----------------------*/
export const generateBarcode = id => {
  let mergedIdDigits = 0;
  let copiedId = id;
  while(id >= 10) {
    mergedIdDigits += id % 10;
    if (mergedIdDigits >= 10) {
      mergedIdDigits = Math.floor(mergedIdDigits / 10) + mergedIdDigits % 10 - 1;
    }
    id = Math.floor(id / 10);
    console.log(mergedIdDigits, id)
  }
  return `BC_${mergedIdDigits}${copiedId}_${(mergedIdDigits * Math.floor(Math.random() * 32) * 3) % 10}${(mergedIdDigits * 9) % 10}`;
}

export const getIdFromBarcode = barcode => {
  let id = '';
  let counter = 4;
  while (barcode[counter] !== "_") {
    id += barcode[counter];
    counter++;
  }

  return Number(id);
}