import { Client } from '@typeit/discord';
import {configBot} from './data';

async function start(): Promise<void> {
  const client = new Client({
    classes: [
      `${bot.ts}/*Discord.ts`, 
      `${bot.js}/*Discord.js` 
    ],
    silent: false,
    variablesChar: ":"
  });

  await client.login(configBot[1]);
}

start();
