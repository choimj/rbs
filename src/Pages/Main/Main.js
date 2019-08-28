import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const Main = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      height: "90vh",
      marginTop: "4%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    table: {
      minWidth: 400
    },
    container: {},
    timeIcon: {
      width: "50%",
      height: "50%",
      verticalAlign: "bottom"
    },
    tableWrap: {
      marginTop: theme.spacing(3),
      width: "100%",
      overflowX: "auto",
      marginBottom: theme.spacing(2)
    },
    iconWrap: {
      width: "30%",
      position: "absolute",
      top: "-100%",
      padding: "10px"
    },
    title: {
      position: "relative",
      color: "#3f51b5"
    }
  }));
  const classes = useStyles();

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                나의 예약현황
                <Paper className={classes.iconWrap}>
                  <AccessTimeIcon className={classes.timeIcon} />
                </Paper>
              </Typography>
              <Paper>
                <p>전체 : 6건</p>
                <p>이전예약 : 2건</p>
                <p>이후예약 : 4건</p>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                자주이용 예약현황
                <Paper className={classes.iconWrap}>
                  <EqualizerIcon className={classes.timeIcon} />
                </Paper>
              </Typography>
              <Paper>
                <p>대회의실</p>
                <p>2019-08-28</p>
                <p>9:00~10:00</p>
                <p>13:00~15:00</p>
                <p>2019-08-29</p>
                <p>9:00~10:00</p>
                <p>13:00~15:00</p>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                참석해야하는 회의 리스트
                {/* <Paper className={classes.iconWrap}>
                  <AccessTimeIcon className={classes.timeIcon} />
                </Paper> */}
              </Typography>
              <Paper className={classes.tableWrap}>
                <Table className={classes.table} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>회의 제목</TableCell>
                      <TableCell align="right">참석자</TableCell>
                      <TableCell align="right">일자/시간</TableCell>
                      <TableCell align="right">예약 부서</TableCell>
                      <TableCell align="right">예약자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
