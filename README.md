# EthereumUtils
A collection of javascript files for use in go-ethereum geth javascript console.

To use this, put the js folder in the directory that you have geth in, and then in the geth console, run loadScript('js/[name of script]');

A list of the different functions included follows:

##in balances.js:

####checkAllBalances():
From the *geth*ing started document. Prints the balance of each address in eth.accounts

####coinbaseBalance():
returns a string of the balance of the coinbase account in ether.

####pCoinbaseBalance():
console.log()s coinbaseBalance() to the console.

####accNBalance(n):
Takes an integer n, and returns the balance of the corresponding account in eth.accounts, listed in ether (as a string).

####blockMinerBalance(n):
returns the balance of the coinbase account which mined the block number n. (listed in ether, as a string)

##in utils.js:

####asdf():
console.log()s the coinbaseBalance(), the admin.miner.hashrate(), and the eth.blocknumber. For easy checking.

####mineTimeEstimate():
Calculates an estimated expected number of seconds until one succesfully mines a block. Prints this as H/M/S, and returns it as seconds.
(note: currently made to take into account an error in geth where admin.miner.hashrate() returns a number in kH/s that is supposed to be in H/s. When this is fixed, this function will have to be updated to reflect that. Also, this function assumes that there are at least 2 uncles for every 25 blocks on average.)

####mko():
console.log()s mineTimeEstimate and coinbaseBalance, as well as checks to see if the hashrate seems "stuck" (reporting incorrectly the same thing, possibly even when it is no longer actually mining.) or if the blocknumber seems "stuck" (e.g. if one is disconnected from the network or some such), and if it finds either of these, gives a warning. Also notes if the hashrate is zero (e.g. to mention that it hasn't finished regenerating the DAG, or something like that.) 
Named for nearby keys (on qwerty), and for having the letter m, for mining, and being near the () keys.
