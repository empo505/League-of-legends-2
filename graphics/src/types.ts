

import {
    type ListGraph
} from '../lib/graphs';
export type strNull = string | null;
export type FlowGraph = ListGraph;
export type stringArray = Array<string>;
export type stringArrayArray = Array<stringArray>;

export type nodeItem = Array<strNull>

export type option = {
    text: string,
    requirement: strNull
};

export type optionArray = Array<option>;
export type options = Array<optionArray>;



export type Game = {
    graph: FlowGraph
    options: options
    story: stringArrayArray
    images: stringArrayArray
    nodeItems: nodeItem
};


export type newRecord = {
    nextNode: number | null
    current_options: optionArray
    story: stringArray
    image: stringArray
    inventory: stringArray
};