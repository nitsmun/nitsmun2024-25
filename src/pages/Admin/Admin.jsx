import { useState } from "react";
import styles from "./Admin.module.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const url = "http://localhost:4000/participant/list";

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [participants, setParticipants] = useState([]);

  const fetchParticipants = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const data = await response.json();

      console.log(response.data);

      setParticipants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === "subhajyotidey2910@gmail.com" ||
      email === "barnilsarma@gmail.com"
    ) {
      setIsAdmin(true);
      fetchParticipants();
    } else {
      alert("Access denied! You are not an admin.");
    }
  };

  return (
    <div className={styles.admin}>
      {!isAdmin ? (
        <form onSubmit={handleSubmit} className={styles.formbox}>
          <div className={styles.gapping}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h2>Participants List</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {participants.length > 0 ? (
                  participants.map((participant) => (
                    <StyledTableRow key={participant.id}>
                      <StyledTableCell>{participant.id}</StyledTableCell>
                      <StyledTableCell>{participant.name}</StyledTableCell>
                      <StyledTableCell>{participant.email}</StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={3} align="center">
                      No participants found
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
