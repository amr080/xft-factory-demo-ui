function randomEthAddress() {
  const hex = Array.from({length: 40}, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  return "0x" + hex;
}

document.getElementById('deploy-form').onsubmit = async function(e) {
  e.preventDefault();
  document.getElementById('deploy-result').textContent = '';
  document.getElementById('deploy-error').textContent = '';

  const data = Object.fromEntries(new FormData(this).entries());
  data.initialSupply = String(data.initialSupply);

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulated roles with requested names
  const roles = {
    admin: data.owner,
    minter: data.owner,
    burner: data.owner,
    blocklist: data.owner,
    oracle: data.owner,
    upgrade: data.owner,
    pause: data.owner
  };

  // Simulated deployment result
  const result = {
    proxyAddress: randomEthAddress(),
    implementationAddress: randomEthAddress(),
    verified: true,
    initialSupplyMinted: true,
    rolesConfigured: roles,
    rewardMultiplier: 1.0,
    input: data
  };

  document.getElementById('deploy-result').textContent = JSON.stringify(result, null, 2);
};
