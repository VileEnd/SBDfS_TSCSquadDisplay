import { Command, CommandMessage, CommandNotFound, Discord, On } from "@typeit/discord";

@Discord('$') // Decorate the class
abstract class AppDiscord {
  @Command('state')
  private onCommand(message:CommandMessage) {
  
  }
  @CommandNotFound()
  private notFound(message:CommandMessage){}
}
