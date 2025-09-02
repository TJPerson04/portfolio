export function renderAlarmSystem() {
  return (
    <div className="alarm-system">
      <p>
        While working at{" "}
        <a className="link" href="https://www.thesanctuarymuseum.org/">
          The Sanctuary Museum
        </a>{" "}
        in my hometown, one of the things the owner was worried about was
        possible theft or damage of the exhibits. So, I created a simple alarm
        system that would make a loud sound anytime someone got too close to the
        exhibit. To achieve this I used a laser motion sensor connected to a
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>{" "}
        hooked up to a speaker. The{" "}
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>{" "}
        would continuously check the motion sensor, and if it was tripped it
        would play a .wav file over the speaker. I also added a{" "}
        <a className="link" href="https://en.wikipedia.org/wiki/Cron">
          cron job
        </a>{" "}
        to the{" "}
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>{" "}
        so that it would restart every night and automatically updated its code
        from my{" "}
        <a className="link" href="https://github.com/TJPerson04/Laser-Alarm">
          GitHub
        </a>
        , making it much easier to change things like the volume of the alarm,
        or the alarm sound, without having to ssh into the{" "}
        <a className="link" href="https://www.raspberrypi.com/">
          Raspberry Pi
        </a>
        .
      </p>
    </div>
  );
}
