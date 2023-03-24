function getBalanceByCategoryInPeriod(
  transactionsList,
  category,
  startTime,
  endTime
) {
  let balance = 0;
  transactionsList.forEach((transaction) => {
    const transactionTime = new Date(transaction.time);
    if (
      transaction.category == category &&
      transactionTime >= startTime &&
      transactionTime <= endTime
    )
      balance += transaction.amount;
  });
  return balance;
}
