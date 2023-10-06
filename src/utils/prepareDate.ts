function prepareDate(date : string) {
  const newDate = new Date(date)
  return {
    day: newDate.getUTCDate() < 10 ? `0 ${newDate.getUTCDate()}` : newDate.getUTCDate(),
    month: newDate.getMonth() + 1 < 10 ? `0 ${newDate.getMonth() + 1}` : newDate.getMonth() + 1
  }
}
export default prepareDate