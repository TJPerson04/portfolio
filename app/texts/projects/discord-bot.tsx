export function renderDiscordBot() {
  return (
    <div className="discord-bot">
      <p>
        A lot of my friends use{" "}
        <a className="link" href="https://discord.com/">
          Discord
        </a>{" "}
        as their primary method of communication, and often we find ourselves
        talking on Discord for hours at a time, but sometimes we want to listen
        to music while we're talking. So, to solve this problem I decided to
        make a bot that can join calls and play any music you want it to.
      </p>
      <p>
        This was one of my first big projects that I continued working on for a
        while, although recently I have not had the time to keep up with it as
        much, so it has probably stopped working. The idea was that you would
        tell it to play any youtube or spotify song or playlist and it would
        create a queue of all the provided links, playing each song one at a
        time. You can find the source code on my{" "}
        <a
          className="link"
          href="https://github.com/TJPerson04/Average-Hunting-Horn-Player"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
