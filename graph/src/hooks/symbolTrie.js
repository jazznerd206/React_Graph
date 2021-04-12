import React, { useState, useEffect } from 'react';
// import { List, Item } from 'linked-list';
import HashMap from 'hashmap';

/**
 * 
 * path to symbols file directory 
 * 
 */

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

export const CreateTrie = (value) => {
    let words = ['AAPL', 'GME', 'MSFT', 'PLTR', 'P', 'PGE', 'PNDA'];
    let t = new Trie();
    words.forEach(word => {
        t.insert(word);
    })
    return t;
}

export const SearchTrie = (trie, value) => {
    return trie.deepLookup(value);
}