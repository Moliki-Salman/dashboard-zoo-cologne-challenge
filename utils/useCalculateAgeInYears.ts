export default (birthdate: Date) => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();
  const ageDifference = Math.round(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );

  if (ageDifference === 0) {
    return 1;
  }

  return ageDifference;
};
