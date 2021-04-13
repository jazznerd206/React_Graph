import HashMap from 'hashmap';

function Trie() {
    this.root = new Node();
}
function Node() {
    this.words = [];
    this.map = new HashMap();
}
Trie.prototype.insert = function(v) {
    let curr = this.root;
    for (let i = 0; i < v.length; i++) {
        let char = v[i];
        if (!curr.map.has(char)) {
            curr.map.set(char, new Node());
        }
        curr = curr.map.get(char);
    }
    curr.words.push(v);
    return;
}
Trie.prototype.deepLookup = function(v) {
    let curr = this.root;
    for (let i = 0; i < v.length; i++) {
        let char = v[i];
        if (!curr.map.has(char)) {
            return;
        }
        curr = curr.map.get(char);
    }
    return deepLookupHelper(curr);
}
function deepLookupHelper(curr) {
    if (curr === null) {
        return [];
    }
    if (curr.map.size === 0) {
        return curr.words;
    }
    let mergedResult = [];
    for (let next of curr.map.values()) {
        let words = deepLookupHelper(next);
        for (let word of words) {
            mergedResult.push(word);
        }
    }
    return mergedResult;
}

export const CreateTrie = () => {
    let t = new Trie();
    let list = ['AAPL', 'GOOG', 'LULU', 'MSFT', 'TSLA', 'PLTR', 'GME', 'ETSY', 'EBAY', 'SBUX', 'ACAB', 'AAL', 'AMAT', 'MXIM', 'MNST', 'BMRN', 'ORLY', 'NVDA', 'NTAP', 'NFLX', 'AMZN', 'CERN', 'PAYX', 'PCAR', 'CSCO', 'CTXS', 'EA', 'VRSN', 'SPCE', 'WYNN', 'XLNX', 'IDXX']
    for (let i = 0; i < list.length; i++) {
        try {
            t.insert(list[i]);
            // console.log('inserted')
        } catch (err) {
            console.log(err);
        }
    }
    return t;
}

export const SearchTrie = (trie, value) => {
    return trie.deepLookup(value);
}