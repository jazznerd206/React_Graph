import HashMap from 'hashmap';

function Trie() {
    this.root = new Node();
    this.size = 0;
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
    ++this.size;
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
Trie.prototype.size = function() {
    return this.size;
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

export const CreateTrie = list => {
    let t = new Trie();
    for (let i = 0; i < list.length; i++) {
        try {
            t.insert(list[i]);
        } catch (err) {
            console.log(err);
        }
    }
    return t;
}

export const InsertIntoTrie = (trie, value) => {
    return trie.insert(value);
}

export const SearchTrie = (trie, value) => {
    return trie.deepLookup(value);
}