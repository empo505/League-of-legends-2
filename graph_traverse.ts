import {
    for_each, List, list, is_null, list_ref, length
} from './lib/list';

import {
    type ListGraph
} from './lib/graphs';

import prompSync = require("prompt-sync");
const prompt = prompSync();

// Type declarations
export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<string>;
export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
};
const game_graph: FlowGraph = {
    adj: [list(1, 2),
          list(),
          list()],
    size: 3
};
const game_story = ["Vart vill du gå?", "Du överlevde!", "Du dog..."];
const game_options = [["Sjön", "Huset"]];

const game_test: Game = {
    graph: game_graph,
    options: game_options,
    story: game_story
};

// Psudo code
function main(game: Game): void {
    console.log("Welcome to game, do you want to start? y/n");
    const input: string = prompt("> ");
    if (input === "y") { // input to start game
        play_game(game);
    } else {} // else do nothing?
}

function play_game(game: Game): void {
    let current_node = 0;
    for (let i = 0; i < game.graph.size; i++) { // loop over the grap
        let current_options = game.options[current_node];
        if (is_null(game.graph.adj[current_node])) { // if a node is an end-node, we end the game
            console.log(game.story[current_node]);
            game_over(game);
            break
        } else {
            console.log(game.story[current_node]);
            display_options(current_options);
            const input: number = Number(prompt("> "));

            if (input <= length(game.graph.adj[current_node]) + 1 && input > 0) {
                console.log("You chose option " + input);
                current_node = Number(list_ref(game.graph.adj[current_node], input - 1));

            } else {
                console.log("Invalid input! Choose again:");
            }
        }
    }
}

function display_options(node_option: Array<string>): void {
    // displays the options to a story prompt
    for (let i = 0; i < (node_option.length); i++) {
        console.log("Option " + (i + 1) + ": " + node_option[i]);
    }
}

function game_over(game: Game): void {
    console.log("The game is over");
    console.log("Do you want to play again? y/n");
    const input: string = prompt("> ");
    if (input === "y") { // input to start game
        main(game);
    } else {} // else do nothing?
}

main(game_test);