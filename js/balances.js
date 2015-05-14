//a number of functions to make checking certain balances more convenient.
//So that one doesn't have to type the whole thing out each time.

function checkAllBalances() { 
var i =0; 
eth.accounts.forEach( function(e){
 	console.log("  eth.accounts["+i+"]: " +  e + " \tbalance: " + web3.fromWei(eth.getBalance(e), "ether") + " ether"); 
i++; 
})
}; 
function coinbaseBalance(){
	return web3.fromWei(eth.getBalance(eth.coinbase),"ether");
}
function pCoinbaseBalance(){
	console.log(coinbaseBalance());
}
function accNBalance(n){
	return web3.fromWei(eth.getBalance(eth.accounts[n]),"ether");
}
function blockMinerBalance(n){
	return web3.fromWei(eth.getBalance(eth.getBlock(n).miner),"ether")
}
