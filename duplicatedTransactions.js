function sortByDateAscending(transactions) {
  return transactions.sort((a, b) => new Date(a.time) - new Date(b.time));
}

function isEqual(a, b) {
  return (
    a.sourceAccount == b.sourceAccount &&
    a.targetAccount == b.targetAccount &&
    a.category == b.category &&
    a.amount == b.amount
  );
}
function isTimeDifferenceSmall(a, b) {
  return new Date(a.time) - new Date(b.time) <= 60000;
}

function findDuplicateTransactions(transactions) {
  let duplicatedTransactions = [];
  let sortedList = sortByDateAscending(transactions);
  let i = 0;

  while (sortedList.length > 1) {
    previousTransaction = sortedList[0];
    let duplicates = [];

    sortedList = sortedList.reduce((reducedArray, currentTransaction) => {
      if (
        isEqual(currentTransaction, previousTransaction) &&
        isTimeDifferenceSmall(currentTransaction, previousTransaction)
      ) {
        duplicates.push(currentTransaction);
        previousTransaction = currentTransaction;
      } else reducedArray.push(currentTransaction);

      return reducedArray;
    }, []);

    if (duplicates.length > 1) {
      duplicatedTransactions.push(duplicates);
    }

    i++;
  }

  return duplicatedTransactions;
}
