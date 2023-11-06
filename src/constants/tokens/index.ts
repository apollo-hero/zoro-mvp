import _ from "lodash";
import config from 'config';

import { TOKEN_INFO } from "constants/tokens/common";
import tokens from "constants/contracts/addresses/tokens.json";

import { ZTOKEN_INFO } from "constants/tokens/vBep";
import zTokens from "constants/contracts/addresses/zTokens.json";

const tokenAddresses = _.mapValues(tokens, (address) => {
  return { "address": address[config.chainId] };
});

// Modifies TOKEN_INFO in place, which populates addresses for
//   the underlyingToken field in ZTOKEN_INFO.
export const TOKENS = _.merge(TOKEN_INFO, tokenAddresses);

const zTokenAddresses = _.mapValues(zTokens, (address) => {
  return { "address": address[config.chainId] };
});
const zTokenInfo = _.merge(ZTOKEN_INFO, zTokenAddresses);
const zTokenInfoFiltered = _.filter(zTokenInfo, "address");
export const VBEP_TOKENS = _.mapKeys(zTokenInfoFiltered, (info) => info["address"].toLowerCase());

export const SWAP_TOKENS = TOKENS;
