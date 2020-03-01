import React from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Name
              </TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.persons.map(person => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">
                  {person.name}
                </TableCell>
                <TableCell align="right">{person.username}</TableCell>
                <TableCell align="right">{person.email}</TableCell>
                <TableCell align="right">{person.address.street}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
