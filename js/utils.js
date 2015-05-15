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

//this might later go in a file specifically for mining.
function mineTimeEstimate(){//outputs to console.log estimated time to mine in Hours Mins Seconds. Returns estimted time in seconds.
	adjustedHashRate=admin.miner.hashrate()*1000*1.04;//1000 is to fix an error. 1.08 is assuming at least 2 uncles every 25 blocks.
	//Remove the factor of 1000 once this issue has been fixed in the version of geth which you are using.
	estimatedSeconds=eth.getBlock("latest").difficulty/adjustedHashRate;
	console.log(Math.floor(estimatedSeconds/3600.)+" Hrs, "+Math.floor((estimatedSeconds%3600)/60)+" Mins, "+Math.floor(estimatedSeconds%60)+" Sec, estimated.");
	return estimatedSeconds;
}
