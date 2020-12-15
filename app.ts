import { Client } from '@typeit/discord';


async function start(): Promise<void> {
  const client = new Client({
    classes: [
      `${bot.ts}/*Discord.ts`, // glob string to load the classes
      `${bot.js}/*Discord.js` // If you compile using "tsc" the file extension change to .js
    ],
    silent: false,
    variablesChar: ":"
  });

  await client.login("YOUR_TOKEN");
}

start();
