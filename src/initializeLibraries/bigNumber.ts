import BigNumber from 'bignumber.js';

const initializeBigNumber = () => {
  // Initialize BigNumber format
  BigNumber.config({
    FORMAT: {
      decimalSeparator: '.',
      groupSize: 3,
      groupSeparator: ',',
    },
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
    POW_PRECISION: 18,
  });
};

export default initializeBigNumber;
