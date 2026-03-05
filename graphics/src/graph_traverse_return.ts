import {
    list_ref, is_null
} from '../lib/list';


import { Game, newRecord, stringArray } from "./types";





/**
 * Takes a Game and two numbers and traverses the game graph until it reaches the end. 
 * @param game {Game} - a record that builds a game
 * @param currentNode {number} - number of the node to start traversing the graph from
 * @param userNext {number} - the user input
 * @returns {newRecord} a record that consists of a number or null, an array of strings
 *             and two strings that is used as input in the VUE file. 
 */
export function vue_game(game: Game, currentNode: number, userNext: number, gameInventory: stringArray): newRecord {
    const neighbors = game.graph.adj[currentNode];
    const nextNode = Number(list_ref(neighbors, userNext));
    const foundItem = game.nodeItems[currentNode]
    let updatedInventory = [...gameInventory]; 

      if (foundItem) {
    
        updatedInventory = [...updatedInventory, foundItem];
    }

    if (!neighbors || neighbors === null ) {
        return {
            nextNode: null,
            current_options: [],
            story: game.story[currentNode] ?? [],
            image: game.images[currentNode] ?? [],
            inventory: gameInventory
        };
    }
    
  

    return {
        nextNode,
        current_options: game.options[currentNode] ?? [],
        story: game.story[currentNode] ?? [],
        image: game.images[currentNode] ?? [],
        inventory: updatedInventory
    };

}