//provides some general utilities for checking things

loadScript('js/balances.js');//loads balances.js in case it isn't already loaded

//asdf() is meant to give a basic concise overview of what's happening. Named asdf for fast typing
//(e.g. in case one's typing is lagging a little bit because one is mining, the function name requires few keystrokes)
function asdf(){
	console.log("balance :"+coinbaseBalance());
	console.log("hashrate:"+admin.miner.hashrate());
	console.log("block#  :"+eth.blockNumber);
	console.log("peers   :"+net.peerCount);
}
