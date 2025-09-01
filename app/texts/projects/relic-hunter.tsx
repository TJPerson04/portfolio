export function renderRelicHunter() {
  return (
    <div className="relic-hunter">
      <p>
        This was a project I worked on at{" "}
        <a className="link" href="https://www.thesanctuarymuseum.org/">
          The Sanctuary Museum
        </a>{" "}
        in my hometown. This museum has a lot of small relics that can be
        difficult to see with the naked eye, so I designed and built a
        joystick-controlled machine that allows you to get a closer look at all
        of the relics.
      </p>
      <p>
        I took apart a 3D printer and reused its parts to build a 2D area that
        could be controlled using a joystick. I also replaced the normal nozzle
        with an electronic microscope connected to a monitor, so as you moved
        the microscope around, you could see whatever it was pointing at zoomed
        in on the screen. I used an{" "}
        <a className="link" href="https://www.arduino.cc/">
          Arduino Uno
        </a>{" "}
        to connect the joystick to the motors, adding extra boundaries and speed
        control to ensure the safety of the machine.
      </p>
    </div>
  );
}
