import React from "react"
import { StyleSheet, View } from "react-native"
import { DataTable, Button } from "react-native-paper"
import { Col, Row, Grid } from "react-native-easy-grid"

const itemsPerPage = 10

let emptyTableData = []
let tableData = [
  { nombre: "Devin", DNI: 1234567 },
  { nombre: "Dan", DNI: 456789 },
  { nombre: "Dominic", DNI: 963124 },
  { nombre: "Jackson", DNI: 7864152 },
  { nombre: "James", DNI: 1231231 },
  { nombre: "Joel", DNI: 1234567 },
  { nombre: "John", DNI: 45645 },
  { nombre: "Jillian", DNI: 78967869 },
  { nombre: "Jimmy", DNI: 45645123 },
  { nombre: "Julie", DNI: 12354674 },
]

const TablaPacientes = () => {
  // Pagination of the table
  const [page, setPage] = React.useState(0)
  const from = page * itemsPerPage
  const to = (page + 1) * itemsPerPage

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Nombre</DataTable.Title>
        <DataTable.Title>DNI</DataTable.Title>
        <DataTable.Title sortDirection="descending">
          Horario de ingreso
        </DataTable.Title>
        <DataTable.Title>Acciones</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row style={styles.row}>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell>Uttapam</DataTable.Cell>
        <DataTable.Cell>26</DataTable.Cell>
        <View style={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="green"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Enviar al consultorio
          </Button>
        </View>

        <View styles={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="red"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Borrar paciente
          </Button>
        </View>
      </DataTable.Row>

      <DataTable.Row style={styles.row}>
        <DataTable.Cell>Vanshika</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
        <View style={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="green"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Enviar al consultorio
          </Button>
        </View>

        <View styles={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="red"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Borrar paciente
          </Button>
        </View>
      </DataTable.Row>

      <DataTable.Row style={styles.row}>
        <DataTable.Cell>Teena</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
        <DataTable.Cell>24</DataTable.Cell>
        <View style={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="green"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Enviar al consultorio
          </Button>
        </View>

        <View styles={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="red"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Borrar paciente
          </Button>
        </View>
      </DataTable.Row>

      <DataTable.Row style={styles.row}>
        <DataTable.Cell>Botones</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <View style={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="green"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Enviar al consultorio
          </Button>
        </View>

        <View styles={styles.botonera}>
          <Button
            mode="contained"
            buttonColor="red"
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Borrar paciente
          </Button>
        </View>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(tableData.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${tableData.length}`}
      />
    </DataTable>
  )
}

export default TablaPacientes

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
    flex: 0,
  },
  row: {
    flex: 1,
    backgroundColor: "white",
  },
  botonera: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn: {
    height: 1,
    width: 1,
  },
})
