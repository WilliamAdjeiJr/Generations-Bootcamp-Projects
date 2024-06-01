export function costCalculator(transactionAmount) {
    const fee = 3;
    const interestRate = 0.01;
    const interestFee = transactionAmount * interestRate;
    return transactionAmount + fee + interestFee;
}
