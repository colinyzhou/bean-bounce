import { Container , Row, Col} from "react-bootstrap"

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
<footer style={{ position: "fixed", bottom: 0, backgroundColor: '#4A2B1D', color: '#FFF', fontFamily: 'cursive', width: "100%",maxHeight: "60px"}}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Bean Bounce &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
