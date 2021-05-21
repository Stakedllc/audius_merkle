const MerkleDistributor = artifacts.require("MerkleDistributor");

const MAIN_GOVERNANCE = '0x5A2890B14B49e5a2Ad9718F7c74973C3297a571c';

const AUDIUS_TOKEN = '0x18aaa7115705e8be94bffebde57af9bfc265b998';
const MERKLE_ROOT = '0x95b1117bb8a26eafaed92042e792c88dcedca6d2f76b93a71b20f54d99be7abe';

/**
* @notice  Deploy the Merkle Distributor contract, which handles the Audius Token distribution
*
* - truffle migrate -f 1 --to 1 --network ${network}
*/
module.exports = async function(deployer, network, accounts) {

  if (network != 'main' && network != 'mainFork') {
    return;
  }

  // Step 1. Deploy MerkleDistributor contract
  await deployer.deploy(
    MerkleDistributor,
    AUDIUS_TOKEN,
    MERKLE_ROOT,
    { from: MAIN_GOVERNANCE }
  );

  console.log('Deployed the Audius Merkle Distrbutor.');

};
