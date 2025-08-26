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

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
        "The website you're looking at right now was built entirely be me.",
      link: "/this-website",
    },
    { title: "Relic Hunter", description: "Test desc", link: "/relic-hunter" },
    {
      title: "Speech Therapy Website",
      description: "Test desc",
      link: "/speech-website",
    }, // TruVox
    {
      title: "Lusso Cosmetics Website",
      description: "Test desc",
      link: "/lusso-website",
    },
    {
      title: "Cosmetics Powder Press Machine",
      description: "Test desc",
      link: "/powder-press",
    },
    {
      title: "Church Bell Chime System",
      description: "Test desc",
      link: "/bell-chime",
    },
    {
      title: "Museum Alarm System",
      description: "Test desc",
      link: "/museuam-alarm",
    },
    {
      title: "Discord Music Bot",
      description: "Test desc",
      link: "/discord-bot",
    },
    { title: "ENED Robots", description: "Test desc", link: "/ened-robot" },
  ];

  const classesData = [
    { title: "Data Structures", description: "Test desc" },
    { title: "Intro Computer Systems", description: "Test desc" },
    { title: "Electronic Engineering Classes", description: "Test desc" },
    { title: "AP Computer Science Principles", description: "Test desc" },
    { title: "Hy-Tech Club", description: "Test desc" },
  ];

  const onClickContent: MenuProps["onClick"] = (e) => {
    setSection(e.key);
  };

  const renderContent = (content: string) => {
    // Main page, overview of me
    if (content === "overview") {
      return <p>It's ya boy</p>;
    }

    // List of my projects
    else if (content === "projects") {
      return (
        <div
          style={{
            marginTop: "0px",
            width: "75%",
            borderRadius: "20px",
            borderWidth: "4px",
            borderColor: "#8b76d6",
            paddingLeft: "17px",
            paddingTop: "7px",
            paddingBottom: "10px",
            background: "white",
          }}
        >
          <List
            pagination={{ position: "bottom", align: "center", pageSize: 5 }}
            itemLayout="horizontal"
            dataSource={projectsData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<InfoCircleOutlined />}
                  title={<a href={item.link}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      );
    }

    // List of relevant classes I've taken
    else if (content === "classes") {
      return (
        <div>
          <p>Classes</p>
        </div>
      );
    }

    // Just in case ig
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
            }}
          />
        </Col>
        <Col span={20}>
          <div className="h-screen justify-center">
            <Row>
              <Col span={24}>
                <h1
                  className="leading text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
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
