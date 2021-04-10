import React, { useState, useEffect } from 'react';
import { List, Item } from 'linked-list';
import HashMap from 'hashmap';

/**
 * 
 * path to symbols file directory 
 * 
 */

const CreateTrie = (value) => {

    // console.log(`value: `, value)
    
    class Trie {
        constructor() {
            this.root = new Node();
        }
        insert(v) {
            let curr = this.root;
            for (let i = 0; i < v.length; i++) {
                let char = v[i];
                if (!curr.map.has(char)) {
                    curr.map.set(char, new Node());
                }
                curr = curr.map.get(char);
            }
            let item = new Item(v);
            curr.words.append(item);
            return;
        }
        deepLookup(v) {
            let curr = this.root;
            for (let i = 0; i < v.length; i++) {
                let char = v[i];
                if (!curr.map.has(char)) {
                    return [];
                }
                curr = curr.map.get(char);
            }
            return this.deepLookupHelper(curr);
        }
        deepLookupHelper(curr) {
            if (curr === null) {
                return [];
            }
            if (curr.map.size === 0) {
                return curr.words;
            }
            let mergedResult = new List();
            console.log(`curr.map.values`, curr.map.values());
            console.log(`curr.words`, curr.words);
            console.log(`curr.value`, curr)
            // for (let next of curr.map.values()) {
            //     let words = this.deepLookupHelper(next);
            //     for (let word of words) {
            //         let item = new Item(word);
            //         mergedResult.append(item);
            //     }
            // }
            // let res = [];
            // let c = mergedResult.head;
            // while (c.next !== undefined) {
            //     res.push(c.value);
            //     c = c.next;
            // }
            // return res;
        }
    }
    class Node {
        constructor() {
            this.words = new List();
            this.map = new HashMap();
        }
    }



    let words = ['AAPL', 'GME', 'MSFT', 'PLTR', 'P'];
    let t = new Trie();
    console.log('trie: ' + t)
    words.map(word => {
        t.insert(word);
    })
    console.log('trie: ' + t)
    // console.log(`t.deepLookup('P') -- `, t.deepLookup('P'));
    return t.deepLookup('P');
}

export default CreateTrie;