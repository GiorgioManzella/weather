import { Container, Row, Form } from "react-bootstrap";
import React from "react";
import { search } from "../slice/locationSlice";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendLocation: (location) => {
      dispatch(search(location));
    },
  };
};

const data = async () => {
  try {
    const result = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=rome&limit=1&appid=` +
        process.env.API_KEY
    ).then((response) => response.json());
  } catch (error) {}
};

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  id="searchNav"
                  type="text"
                  placeholder="Enter location"
                />
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
