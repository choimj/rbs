import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Box from "@material-ui/core/Box";
import PieChartApp from "../../Components/PieChartApp";

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
    tableWrap: {
      marginTop: theme.spacing(3),
      width: "100%",
      overflowX: "auto",
      marginBottom: theme.spacing(2)
    },
    timeIconWrap: {
      width: "13vh",
      background: "linear-gradient(60deg, #ffa726, #fb8c00)",
      boxShadow:
        "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)"
    },
    timeIcon: {
      verticalAlign: "bottom",
      color: "#ffffff",
      width: "70%",
      height: "70%",
      margin: "10px 5px",
      padding: "10px"
    },
    chartIconWrap: {
      width: "13vh",
      background: "linear-gradient(60deg, #66bb6a, #43a047)",
      boxShadow:
        "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)"
    },
    title: {
      color: "#999",
      fontSize: "14px",
      textAlign: "right"
    },
    textAlignRight: {
      textAlign: "right"
    },
    subTitle: {
      fontSize: "10px"
    }
  }));
  const classes = useStyles();

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };
  const rows = [
    createData(
      "부산 UIUX 스터디",
      "최민지, 이제훈 ...",
      "2019/09/20 9:00",
      "UIUX Core System",
      "최민지"
    ),
    createData(
      "위하고 게시판",
      "백화현, 김성훈, 김기덕, ...",
      "2019/09/20 9:00",
      "UIUX Core System",
      "최민지"
    ),
    createData(
      "신규사원 교육",
      "이제훈, 정지연, 임채형, ...",
      "2019/09/20 9:00",
      "UIUX Core System",
      "최민지"
    )
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.timeIconWrap}>
                    <AccessTimeIcon
                      className={classes.timeIcon}
                      fontSize="large"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.title}
                  >
                    나의 예약 건수
                  </Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={9}>
                      <Typography variant="h6">
                        <Box textAlign="right">2/4</Box>
                      </Typography>
                      <Typography component="div">
                        <Box textAlign="right" fontSize={10}>
                          (Prev/Next)
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="h3">6</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.chartIconWrap}>
                    <EqualizerIcon
                      className={classes.timeIcon}
                      fontSize="large"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.title}
                  >
                    자주 이용하는 회의실 예약 건수
                  </Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={9}>
                      <Typography component="div">
                        <Box
                          textAlign="right"
                          m={0}
                          style={{ padding: "14px 0" }}
                        >
                          대회의실
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="h3">6</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <PieChartApp />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                참석해야하는 회의 리스트
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
