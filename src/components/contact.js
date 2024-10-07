import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control placeholder="Enter your name" required />
            </Col>
            <Col sm={4}>
              <Form.Control placeholder="Enter your email address" required/>
            </Col>
            <Col sm={4}>
              <Form.Control placeholder="Enter your contact number"required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your messege" required/>
            </Col>
          </Row>
          <div className="btn-holder">
          <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!4v1728198149777!6m8!1m7!1sFmHwBCen7Y2U4SASyPdFRQ!2m2!1d-7.637128355894814!2d111.8918473311869!3f9.250405030686704!4f6.177903200037832!5f0.7820865974627469" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
