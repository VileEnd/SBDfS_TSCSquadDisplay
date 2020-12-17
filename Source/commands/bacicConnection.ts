import {ArgsOf, Discord, On, Once} from "@typeit/discord";
import {configBot} from "../BaseData/accesdata";

@Discord("!")

export abstract class BasicConnect{
    @On("ready")
    initialize(): void {
        console.log(`${configBot.botName} successfully logged in`);
    }
    @On("guildCreate")
    guildJoin([guild]: ArgsOf<"guildCreate">): void {
        console.log(`Bot added to the Discord Server : ${guild.name} with ${guild.channels} and ${guild.memberCount}`);
    }
}
