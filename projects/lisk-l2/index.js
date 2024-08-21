const { sumTokensExport, nullAddress } = require('../helper/unwrapLPs')
const config = {
  ethereum: {
    owners: ['0x2658723bf70c7667de6b25f99fcce13a16d25d08', '0x26dB93F8b8b4f7016240af62F7730979d353f9A7',],
    blacklistedTokens: ['0x6033F7f88332B8db6ad452B7C6D5bB643990aE3f'],
    tokens: [nullAddress],
  }
}

Object.keys(config).forEach(chain => {
  const { owners, tokens = [], blacklistedTokens, } = config[chain]
  module.exports[chain] = {
    tvl: sumTokensExport({ owners, tokens, fetchCoValentTokens: true, blacklistedTokens, })
  }
})