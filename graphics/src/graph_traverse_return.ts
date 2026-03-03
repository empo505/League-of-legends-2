import {
    list_ref
} from '../lib/list';

import {
    type ListGraph
} from '../lib/graphs';

export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<Array<string>>;
export type Images = Array<Array<string>>;
export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
    images: Images
};

type newRecord = {
    nextNode: number | null
    current_options: Array<string>
    story: Array<string>
    image: Array<string>
}

/**
 * Takes a Game and two numbers and traverses the game graph until it reaches the end. 
 * @param game {Game} - a record that builds a game
 * @param currentNode {number} - number of the node to start traversing the graph from
 * @param userNext {number} - the user input
 * @returns {newRecord} a record that consists of a number or null, an array of strings
 *             and two strings that is used as input in the VUE file. 
 */
export function vue_game(game: Game, currentNode: number, userNext: number): newRecord {
    const neighbors = game.graph.adj[currentNode];
    
    if (!neighbors || neighbors === null ) {
        return {
            nextNode: null,
            current_options: [],
            story: game.story[currentNode] ?? [],
            image: game.images[currentNode] ?? []
        };
    }
    const nextNode = Number(list_ref(neighbors, userNext));
    return {
        nextNode,
        current_options: game.options[currentNode] ?? [],
        story: game.story[currentNode] ?? [],
        image: game.images[currentNode] ?? []
    };
}