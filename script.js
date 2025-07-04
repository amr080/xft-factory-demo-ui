// script.js
function randomEthAddress() {
  const hex = Array.from({length: 40}, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  return "0x" + hex;
}

document.addEventListener('DOMContentLoaded', function() {
  // Pre-populate the form with example values
  document.querySelector('input[name="name"]').value = "Walmart Digital Dollar";
  document.querySelector('input[name="symbol"]').value = "WMTX";
  document.querySelector('input[name="owner"]').value = "0xf6080682dFCa67A25F294343a03C8cd8675cc41E";
  document.querySelector('input[name="initialSupply"]').value = "1000000";
});

document.getElementById('deploy-form').onsubmit = async function(e) {
  e.preventDefault();
  document.getElementById('deploy-result').textContent = '';
  document.getElementById('deploy-error').textContent = '';

  const data = Object.fromEntries(new FormData(this).entries());
  data.initialSupply = String(data.initialSupply);

  await new Promise(resolve => setTimeout(resolve, 1000));

  const roles = {
    admin: data.owner,
    minter: data.owner,
    burner: data.owner,
    blocklist: data.owner,
    oracle: data.owner,
    upgrade: data.owner,
    pause: data.owner
  };

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
