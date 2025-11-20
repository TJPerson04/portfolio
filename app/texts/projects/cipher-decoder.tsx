export function renderCipherDecoder() {
  return (
    <div className="bell-system">
      <p>
        In my free time, when I'm not working on projects, I like to play a game
        called{" "}
        <a className="link" href="https://en.wikipedia.org/wiki/Dungeons_%26_Dragons">
            Dungeons and Dragons
        </a>
        . In this game, you have one person (named the "DM") who creates the game.
        They create a world with places and people and plot. Then, we as players create
        our own characters in this world. We will then play these characters in an improv manner,
        while the DM creates a story for our characters to be a part of.
      </p>
      <p>
        Part of the game element to D&D is that a DM will often create puzzles for their players
        to solve. Particularly, one day my DM gave us the text "Ihgvq mbuvhmafvobac rvon. Jhfxvqnl 
        xy xmkw gwa cotfibf qt aaw hnud." The idea was that he would give us this encoded text,
        then a couple weeks later he would give us the key to decode it. Instead, I quickly
        recognized this as probably a{" "}
        <a className="link" href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">
            Vigenere Cipher
        </a>
        {" "} and as such I knew it needed a key that we didn't have. 
    </p>
    <p>
        So instead of waiting for my DM to give us the key, I spent the next 4 days writing a program 
        to automatically reverse engineer the key from the encoded text, given that the solution 
        (and probably the key) consisted of real english words. This program uses data parallelism 
        multi-threading and a binary search through the dictionary to speed up processing times. You
        can see the full program on my{" "}
        <a className="link" href="https://github.com/TJPerson04/Cipher-Decoder">
            GitHub
        </a>
        .
      </p>
    </div>
  );
}
