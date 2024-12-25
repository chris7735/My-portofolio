import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/livable.png";
import emotion from "../../Assets/Projects/rebecca.png";
import editor from "../../Assets/Projects/africa.png";
import chatify from "../../Assets/Projects/youeye.png";
import suicide from "../../Assets/Projects/ninjacatg.png";
import bitsOfCode from "../../Assets/Projects/rubicon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YouEye"
              description="YouEye is a single-component UI toolbox for React that leverages prop-based styling and static and dynamic
                            extraction using Babel. It also eliminates many problems or friction that traditional CSS or Sass solutions
                            suffer from."
              ghLink="https://youeye.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Landing Page Refresh"
              description="As the primary developer, I refreshed the Rubicon Finance landing page and general website.
                            The site uses Next.js with Tailwind CSS for styling. For the 3D animation, the Atropos package is used."
              ghLink="https://rubicon.finance/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dream Sports Africa"
              description="Gatsby app for non-profit fundraising. I was a senior developer on the pro bono morehumaninternet.org team.
                            Besides general development, my tasks included copy editing and Gatsby image optimization. The
                            morehumaninternet.org remote team is focused on helping non-profits use technology to meet their goals."
              ghLink="http://dreamsportsafrica.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Livable Hawaii Kai Hui"
              description="Designed and delivered (implemented in Webflow with a custom JavaScript and Mapbox SDK) a website for a
                            land stewardship nonprofit. For the organization, it was essential to capture both their work on the land and
                            respect for the native Hawaiian community."
              ghLink="http://lhkh.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Twilio & Plivo In-bound Marketing Call Handling"
              description="During my time at NinjaCat, I was given ownership over a microservice built on Laravel Lumen, which
                            responded to incoming webhook requests from Twilio and Plivo to direct them on how to handle incoming
                            calls. The NinjaCat platform allowed users to configure dynamic call routing based on various parameters,
                            including time of day, caller location, search engine, etc."
              ghLink="https://www.ninjacat.io/marketing-performance-management-platform/agency-call-tracking"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Beauty Salon Inventory Management System"
              description="This system was built as a new prominent feature within an existing salon management application. It was
                            built in PHP using Propel 2 and some Symfony components."
              ghLink="https://www.rebeccajadebeauty.co.uk/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
