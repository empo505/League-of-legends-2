import {
    for_each,
    List,
    list, is_null,
    list_ref
} from './lib/list';
import {
    type Queue, empty, is_empty, enqueue, dequeue, head as qhead
} from './lib/queue_array';
import {
    type ListGraph
} from './lib/graphs';

// Type declarations
export type Choices = ListGraph;
export type Choices_arr = Array<Array<string>>;
export type Story = Array<string>;

const story_graph: Choices = {
    adj: [list(1, 2),
          list(3, 4),
          list(5),
          list(6),
          list(6),
          list(),
          list()],
    size: 7
};

const story_choice: Choices_arr = [["path 1", "path 2"],
                                   ["path 3", "path 4"]];

function treverse_graph(graph: Choices) {
    const nodes = graph.size;
    const adj_lst = graph.adj;
    const visited: Array<number> = new Array<number>(nodes).fill(0);
    // 
    for (let i = 0; i < nodes; i++) {
        if (adj_lst[i] === null) { // if a node have no children, we are done
            return visited;
        } else if (visited[i] === 0) { // when visiting a node, change it to 1 in the array
            visited[i] = 1;
        } else {}
    }
}

console.log(treverse_graph(story_graph));


// Psudo code

function main() {
    // "Welcome to game, do you want to start"
    if (input === "y") { // input to start game
        return play_game();
    } else {} // else do nothing
}

function play_game(graph: ListGraph, story: Array<string>, options: Array<Array<string>>) {
    for (let i = 0; i < graph.size; i++) {
        if (is_null(graph.adj[i])) { // if a node is an end-node, we end the game
            return "Game over";
        } else {
            // const choices = list_ref(graph.adj[i], i - 1);
            display_prompt(story, options); // otherwise display a story promt
        }
    }
}

function display_prompt(story: Array<string>, options: Array<Array<string>>) {
    for (let i = 0; i < array.length(story); i++) {
        console.log(story[i]); // display story promt at index i
        display_options(options[i]); // display the choices 
    }
}

function display_options(options: Array<Array<string>>) {
    // displays the options to a story prompt
    for (let i = 0; i < Array.length(options[i]); i++) {
        console.log("Option 1: " + options[i])
        console.log("Option 2: ")
    }
}