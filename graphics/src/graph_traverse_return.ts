import {
    list_ref
} from '../lib/list.ts';

import {
    type ListGraph
} from '../lib/graphs.ts';


// Type declarations
export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<string>;
export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
};



export function vue_game(game: Game, currentNode: number, userNext: number) {
    const neighbors = game.graph.adj[currentNode];
    
    // SAFETY CHECK: If there are no neighbors, the game is over.
    // This prevents list_ref from crashing the browser.
    if (!neighbors || neighbors === null) {
        return {
            nextNode: null, 
            current_options: [],
            story: game.story[currentNode]
        };
    }

    // Use the index directly. 
    // If userNext is 0-based from Vue, don't subtract 1 here.
    const nextNode = Number(list_ref(neighbors, userNext));

    return {
        nextNode, // Renamed to match your App.vue
        current_options: game.options[currentNode],
        story: game.story[currentNode]
    };
}



