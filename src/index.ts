#!/usr/bin/env node

import inquirer from "inquirer";
import { program } from "commander";
import path from "path";
import url from "url";
import fs from "fs-extra";
import ora from "ora";

program
  .name("create-klabs-app")
  .description("CLI to create projects based on KLabs standards (Kroma Labs)")
  .option(
    "--template <template>",
    "use specific template for for generating your app"
  )
  .argument("[name]", "The name of your app")
  .action(async (name) => {
    const opts = program.opts();
    const cwd = process.cwd();
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    process.chdir(__dirname);

    if (!name) {
      const answer = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What's the app name?",
        },
      ]);

      name = answer.name;
    }

    const source = await (async function () {
      if (opts.template) return path.join("../templates", opts.template);

      const { type } = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: "What template are you going to choose?",
          choices: [
            {
              name: "React (Vite+React+ReactRouter) only",
              value: "fa-spa-only",
            },
          ],
        },
      ]);

      return path.join("../templates", type);
    })();

    const spinner = ora();
    spinner.start("Starting to create your project");
    console.log({ source, cwd });
    try {
      await fs.access(source);
    } catch (e) {
      spinner.fail("Template not found for" + source);
    }

    const destination = path.join(cwd, name);
    fs.mkdirSync(destination, { recursive: true });
    fs.copySync(source, destination);

    spinner.succeed("Successfully created your project");
  });

program.parse();
