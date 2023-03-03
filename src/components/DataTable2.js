import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { DataTable, Button } from "react-native-paper"

import { Col, Row, Grid } from "react-native-easy-grid"

const TablaPacientes = () => {
  return (
    <View style={styles.MainContainer}>
      <Grid>
        <Row>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>DNI</DataTable.Title>
            <DataTable.Title sortDirection="descending">
              Horario de ingreso
            </DataTable.Title>
            <DataTable.Title>Acciones</DataTable.Title>
          </DataTable.Header>
        </Row>
        <Col size={25}>
          <Row style={styles.Cell_1}>
            <Text style={styles.text}>1</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.Cell_2}>
            <Text style={styles.text}>2</Text>
          </Row>
        </Col>
        <Col size={50}>
          <Row style={styles.Cell_1}>
            <Text style={styles.text}>4</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  Cell_1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6D00",
  },
  Cell_2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E2723",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
})

export default TablaPacientes
