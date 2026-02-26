import {
    list_ref,
    type List
} from '../../lib/list.ts';

import {
    type ListGraph
} from '../../lib/graphs.ts';


export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<string>;
export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
};
type newRecord = {
    nextNode: number | null
    current_options: string[]
    story: string
}


export function vue_game(game: Game, currentNode: number, userNext: number): newRecord {
    const neighbors = game.graph.adj[currentNode];
    
    if (!neighbors || neighbors === null) {
        return {
            nextNode: null, 
            current_options: [],
            story: String(game.story[currentNode])
        };
    }

   
    const nextNode = Number(list_ref(neighbors, userNext));

    return {
        nextNode, 
        current_options: game.options[currentNode] ?? [],
        story: String(game.story[currentNode])
    };
}



