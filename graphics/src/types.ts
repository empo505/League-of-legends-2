import {
    List,
    list_ref
} from '../lib/list';

import {
    type ListGraph
} from '../lib/graphs';

export type FlowGraph = ListGraph;
export type stringArrayArray = Array<Array<string>>;

export type nodeItem = Array<string | null>
export type option = {
    text: string,
    requirement: string | null
}
export type options = Array<Array<option>>
export type inventory = Array<string>
export type itemneeds = Array<[string, string] | 0>

/*
export type Story = Array<Array<string>>;
export type Images = Array<Array<string>>;
*/

export type Game = {
    graph: FlowGraph
    options: options
    story: stringArrayArray
    images: stringArrayArray
    nodeItems: nodeItem
    inventory: inventory
};


export type newRecord = {
    nextNode: number | null
    current_options: Array<option>
    story: Array<string>
    image: Array<string>
    inventory: inventory
}