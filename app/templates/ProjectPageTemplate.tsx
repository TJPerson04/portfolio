import { Col, Image, Row } from "antd";

interface ProjectPageTemplateProps {
  title: string;
  thumbnailURL?: string | undefined;
  demoVideoURL?: string | undefined;
  description: () => any;
}

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  title,
  thumbnailURL,
  demoVideoURL = undefined,
  description = undefined,
}) => {
  return (
    <div className={`Project-${title} h-screen justify-center`}>
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
            {title}
          </h1>
        </Col>
      </Row>

      {thumbnailURL && <Image src={thumbnailURL} />}

      {demoVideoURL && <iframe src={demoVideoURL} />}

      <Row>
        <Col span={24}>
          <div
            style={{
              color: "white",
              marginLeft: "50px",
              marginRight: "50px",
              padding: "30px",
              textAlign: "justify",
              border: "3px solid #8b76d6",
              borderRadius: "20px",
              whiteSpace: "pre-line",
              fontSize: "large",
              fontFamily: "Inconsolata, monospace",
            }}
            className="leading text-gray-800 dark:text-gray-100 flex justify-center"
          >
            {description()}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectPageTemplate;
