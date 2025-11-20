export function renderMCBlackjack() {
  return (
    <div className="mc-blackjack">
      <p>
        Since I was a kid I've played a lot of video games, but one that I have
        consistently gone back to over and over again is Minecraft. If you're
        unfamiliar, it is a sandbox game where, using blocks, you can create
        whatever you want. Truly in this game you are only limited by you're
        imagination. To add to the sandbox experience, there exists a mod called{" "}
        <a
          className="link"
          href="https://www.curseforge.com/minecraft/mc-mods/opencomputers"
        >
          OpenComputers
        </a>
        , which adds programmable computers to the game. These computers can be
        programmed in{" "}
        <a className="link" href="https://www.lua.org/">
          Lua
        </a>{" "}
        and can be made with a connected monitor for display. Of course, as
        someone who loves coding, this mod is very appealing to me and I decided
        to spend some time creating the popular card game Blackjack using one of
        these computers. You can find the source code on my{" "}
        <a
          className="link"
          href="https://github.com/TJPerson04/Computer-Craft-Blackjack"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        This was particularly interesting because it was my first experience creating
        a custom display. Since these computers only allow you to choose the color of
        a given square, I had to create my own functionality to create custom shapes. I
        did this by creating encoded constants for each reoccuring shape (the suit shapes,
        the back of a card, the numbers/letters on a card), then creating a function to
        decode these constants, using them to print a series of pixels to the screen at a 
        specific spot.
      </p>
    </div>
  );
}
