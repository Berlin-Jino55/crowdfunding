const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'lawsuit alter connect round bus casual collect hidden mass piano ridge sweet',
  'https://sepolia.infura.io/v3/57907d2015214f31808056178b3d8201'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  console.log('');

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  console.log('');
  console.log('Contract deployed successfully');

  console.log('view transaction at: https://sepolia.etherscan.io/address/',result.options.address);
};
deploy();