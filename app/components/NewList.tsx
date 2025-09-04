import { InfoCircleOutlined } from "@ant-design/icons";
import { List } from "antd";
import "../index.css";

interface DataObj {
  link: string;
  title: string;
  description: string;
}

interface NewListProps {
  dataSource: DataObj[];
}

const NewList: React.FC<NewListProps> = ({ dataSource }) => {
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
        background: "black",
      }}
    >
      <List
        pagination={{
          position: "bottom",
          align: "center",
          pageSize: 5,
        }}
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item, index) => (
          <List.Item style={{ borderBottomColor: "rgb(212, 212, 212, 0.35)" }}>
            <List.Item.Meta
              avatar={<InfoCircleOutlined />}
              title={
                <a className="new-list-title" href={item.link}>
                  {item.title}
                </a>
              }
              description={
                <span
                  style={{
                    fontFamily: "Inconsolata, monospace",
                    color: "#d5d2d5",
                  }}
                >
                  {item.description}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NewList;
