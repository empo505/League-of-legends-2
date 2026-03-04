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
export type inventory = Array<string>
export type itemneeds = Array<[string, string] | 0>

/*
export type Story = Array<Array<string>>;
export type Images = Array<Array<string>>;
*/

export type Game = {
    graph: FlowGraph
    options: stringArrayArray
    story: stringArrayArray
    images: stringArrayArray
    nodeItems: nodeItem
    inventory: inventory
    nodeneeds: itemneeds
};


export type newRecord = {
    nextNode: number | null
    current_options: Array<string>
    story: Array<string>
    image: Array<string>
    inventory: inventory
}