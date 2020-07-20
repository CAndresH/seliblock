// Tell web3 that a deployed copy of 'MarriageRegistry' exists
import web3 from "../web3"; // This pulls it from our web3 instance, not actual web3
import BadgeRegistry from "../build/BadgeRegistry.json";

const instance = new web3.eth.Contract(
  JSON.parse(BadgeRegistry.interface),

  // This si the address of the contract
  "0x88AE8f0596c9857CE3Af731f54430ddC57F93b83"
);

export default instance;
