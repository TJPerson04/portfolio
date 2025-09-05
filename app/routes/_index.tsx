import type { MetaFunction } from "@remix-run/node";
import "~/index.css";
import type { MenuProps } from "antd";
import { Row, Col, Menu, List } from "antd";
import {
  BookOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  MergeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import NewList from "~/components/NewList";

export const meta: MetaFunction = () => {
  return [
    { title: "Tyler DiLoreto's Portfolio" },
    {
      name: "Tyler DiLoreto's Portfolio",
      content: "Welcome to the portfolio of Tyler DiLoreto!",
    },
  ];
};

export default function Index() {
  const [section, setSection] = useState<string>("overview");

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    { key: "overview", icon: <IdcardOutlined />, label: "Overview" },
    { key: "projects", icon: <MergeOutlined />, label: "Projects" },
    { key: "classes", icon: <BookOutlined />, label: "Classes" },
  ];

  const projectsData = [
    {
      title: "This Website",
      description:
        "The website you're on right now, made to show off my various projects.",
      link: "/projects/this-website",
    },
    {
      title: "Relic Hunter",
      description:
        "An interactive museum exhibit displaying a variety of relics.",
      link: "/projects/relic-hunter",
    },
    {
      title: "Speech Therapy Website",
      description:
        "A website that is meant to be used in conjunction with a speech therapist for voice training.",
      link: "/projects/speech-therapy",
    }, // TruVox
    {
      title: "Cosmetics Powder Press Machine",
      description:
        "A machine that semi-automates the pressing of various cosmetic powders.",
      link: "/projects/powder-press",
    },
    {
      title: "Discord Music Bot",
      description:
        "A bot for the app Discord, made to play music in voice channels.",
      link: "/projects/discord-bot",
    },
    {
      title: "Church Bell Chime System",
      description:
        "A system that rings the bells of a church at given times of the day.",
      link: "/projects/bell-system",
    },
    {
      title: "Museum Alarm System",
      description: "A security measure to protect various exhibits from theft.",
      link: "/projects/alarm-system",
    },
    {
      title: "Lusso Cosmetics Website",
      description:
        "A website made for a local cosmetics company in my hometown.",
      link: "/projects/lusso-cosmetics-web",
    },
    {
      title: "ENED Robots",
      description:
        "Two robots made out of legos, each designed to do various tasks simultating real world applications.",
      link: "/projects/ened-robots",
    },
    {
      title: "Blackjack in Minecraft",
      description: "The card game Blackjack within the video game Minecraft.",
      link: "/projects/mc-blackjack",
    },
  ];

  const classesData = [
    {
      title: "Data Structures",
      description:
        "The various ways that data is stored within computers, along with their pros and cons.",
      link: "/classes/data-structs",
    },
    {
      title: "Intro Computer Systems",
      description:
        "An overview of how code is run on computers, starting with high level C code and moving all the way down to the transistors.",
      link: "/classes/intro-comp-sys",
    },
    {
      title: "Python Programming",
      description: "A more in-depth look at the Python programming langauge.",
      link: "/classes/python-programming",
    },
    {
      title: "Electronic Engineering Classes",
      description:
        "A series of hand-on classes where I learned about various components and how they work, while also building real circuits with those components.",
      link: "/classes/elec-eng",
    },
    {
      title: "AP Computer Science Principles",
      description: "An early introduction to coding principles using Python.",
      link: "/classes/ap-comp-sci",
    },
    {
      title: "Hy-Tech Club",
      description:
        "An early introduction to other coding languages, such as HTML and JavaScript.",
      link: "/classes/hy-tech-club",
    },
  ];

  const onClickContent: MenuProps["onClick"] = (e) => {
    setSection(e.key);
  };

  const renderContent = (content: string) => {
    // Main page, overview of me
    if (content === "overview") {
      return (
        <div
          style={{
            color: "white",
            marginLeft: "50px",
            marginRight: "50px",
            padding: "30px",
            textAlign: "justify",
            border: "3px solid transparent",
            borderRadius: "20px",
            whiteSpace: "pre-line",
            fontSize: "large",
            fontFamily: "Inconsolata, monospace",
          }}
          className="leading text-gray-800 dark:text-gray-100 flex justify-center"
        >
          <p>
            I am currently in my third year studying computer science at the
            University of Cincinnati. Feel free to explore this website and
            learn more about my experience!
          </p>
        </div>
      );
    }

    // List of my projects
    else if (content === "projects") {
      return <NewList dataSource={projectsData} />;
    }

    // List of relevant classes I've taken
    else if (content === "classes") {
      return <NewList dataSource={classesData} />;
    }

    // Just in case
    else {
      return (
        <div>
          <p>erm, that wasn't supposed to happen</p>
        </div>
      );
    }
  };

  return (
    <div>
      <Row>
        <Col span={4}>
          <Menu
            onClick={onClickContent}
            defaultSelectedKeys={["overview"]}
            mode="vertical"
            theme="dark"
            items={items}
            style={{
              paddingTop: "30px",
              width: "100%",
              height: "100%",
              background: "transparent",
              fontFamily: "Inconsolata, monospace",
            }}
          />
        </Col>
        <Col span={20}>
          <div className="h-screen justify-center">
            <Row>
              <Col span={24}>
                <h1
                  className="leading text-3xl font-bold text-gray-800 dark:text-gray-100 flex justify-center"
                  style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    fontFamily: "Inconsolata, monospace",
                    fontSize: "2.5em",
                    fontWeight: "bold",
                  }}
                >
                  The Portfolio of Tyler DiLoreto
                </h1>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="flex justify-center">
                {renderContent(section)}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
