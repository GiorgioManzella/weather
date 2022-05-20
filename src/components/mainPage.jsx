import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { search } from "../slice/locationSlice";

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

class Main extends React.Component {
  render() {
    return (
      <>
        <Container id="mainContainer">
          <Row>
            <h1>Temperature in </h1>
            <div className="box"></div>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
