export const formatNumberWithCommas = number => {
  if (typeof number !== 'number') {
    return 0;
  }
  const _parserNumber = Number(number);
  return _parserNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}