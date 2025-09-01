export function renderBellSystem() {
  return (
    <div className="bell-system">
      <p>
        During my time working at{" "}
        <a className="link" href="https://www.thesanctuarymuseum.org/">
          The Sanctuary Museum
        </a>{" "}
        in my hometown, one of the projects I worked on was fixing the bell
        system. The museum is located within an old church, and it used to have
        a sound system that would play a bell ringing sound at certain hours of
        the day, but it was old and outdated and didn't work anymore. So my job
        was to get it working again. I used a{" "}
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>{" "}
        connected to the church's sound system and created a program to play the
        bell ringing sound at given times of the day, every day, with the bell
        ringing a different amount of times depending on the time (9 times at
        9am, 3 times at 3pm, etc.). As an additional measure, I wrote a script
        so this Raspberry Pi will restart every night and automatically update
        its code, so that it can easily be updated or changed without having to
        actually interact with the{" "}
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>
        . The source code for the program can be found on my
        <a className="link" href="https://github.com/TJPerson04/Bell-Chime">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
