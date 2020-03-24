#!/usr/bin/env node

const program = require("commander");
const list = require("../lib/list");
const order = require("../lib/order");

// List coffee menu
// $ coffee-shop list
// $ coffee-shop ls
program
    .command("list")
    .alias("ls")
    .description("List coffee menu")
    .action(()=>{
        list();
    });

// Order coffee
// $ coffee-shop order
// $ coffee-shop o
program
    .command("order")
    .alias("o")
    .description("Order a coffee")
    .action(()=>{
        order();
    });

program.parse(process.argv);