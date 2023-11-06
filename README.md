# zoro-protocol
zoro-protocol
Run:
- yarn
- yarn start

Modified:
- RPC URLs and Endpoints in constants/endpoints.ts
- social links in footer/constants.ts

Update the JSON deployment addresses
- after building your contracts (yarn deploy-zksync)
- cd ~/zoro-protocol/deploy
- cp *.json src/constants/contract/addresses/

Removed:
- removed generatePancakeSwapTokens + from postinstall
- removed storybook
- removed graphql queries for now [./src/config/codegen.ts] in postinstall
- removed test setup in vite config
- removed Sentry ErrorLoggerProvider in index.tsx
- removed constants in types/index.ts and config/

ToDo:
- clean up translations/en.json
- add error handlig to ConnectWallet button
- Update the addresses in contract/addresses/main.json
- Update the /api/governance/venus to give information
