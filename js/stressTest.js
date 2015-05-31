//this file is currently generally for stress testing stuff.
//It may expand for more general use in the future.


//sendLots is from https://gist.github.com/tgerring/bd267e641e6fba63a126
// sendLots(eth.coinbase, eth.accounts[1])
sendLots = function(fromAccount, toAccount) {
  loops = 5;
  txcount = 2;
  waitBlocks = 1;
 
  i = 0;
  do {
    i++;
    j = 0;
    do {
      j++;
      // customize the transaction here
      wei = (i-1)*10+j;
      tx = eth.sendTransaction({from: fromAccount, to: toAccount, value: wei});
      console.log("tx"+j+": "+tx+" for "+wei+" wei");
    } while (j < txcount)
    if (i != loops) {
      console.log(i+": Waiting "+waitBlocks+" block for "+(eth.blockNumber+waitBlocks));
      admin.debug.waitForBlocks(eth.blockNumber-1+waitBlocks); // This seems off
    }
    else {
      console.log(i+": Next block is "+(eth.blockNumber+waitBlocks)+"... wait for it :)")
    }
  } while (i < loops);
  return
}

//TODO: add a modified version of sendLots which has additional parameters for other things.
//TODO: more other things here.
