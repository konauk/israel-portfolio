import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, readMoreLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="proj-txtx">
        <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
              Click here to see site
            </a>
        </div>
      </div>
    </Col>
  )
}
