#!/usr/bin/env node

import inquirer from "inquirer";
import { green } from "colorette";

inquirer
  .prompt([
    {
      type: "input",
      name: "appName",
      message: "What's the app name?",
    },
    {
      type: "list",
      name: "type",
      message: "What template are you going to choose?",
      choices: [
        {
          name: "Vite + React + React Router",
          value: "fe_spa_only",
        },
        {
          name: "SST + React (Vite+React+ReactRouter) + tRPC",
          value: "fullstack",
        },
        {
          name: "SST only",
          value: "backend_only",
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(green(answers.appName));
  });

green("Done!");
