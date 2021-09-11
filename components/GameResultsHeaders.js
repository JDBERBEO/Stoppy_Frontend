import React from 'react'
import { Col, Row } from 'react-native-easy-grid';
import { Text, StyleSheet } from 'react-native'


export const GameResultsHeaders = () => {
    return (
        <Row>
          <Col><Text style={styles.text}>Name</Text></Col>
          <Col><Text>Score</Text></Col>
          <Col><Text style={styles.text}>City/Country</Text></Col>
          <Col><Text>Score</Text></Col>
          <Col><Text style={styles.text}>Fruit</Text></Col>
          <Col><Text>Score</Text></Col>
          <Col><Text style={styles.text}>Color</Text></Col>
          <Col><Text>Score</Text></Col>
          <Col><Text style={styles.text}>Object</Text></Col>
          <Col><Text>Score</Text></Col>
        </Row>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent:"center"
  },
  imageLogo: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20%",
    marginTop: "-10%"
  },
  text:{
    textAlign:"center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});
