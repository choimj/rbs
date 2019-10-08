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
import PieChart from "../../Components/PieChart";

const MainPresenter = ({
  bookingCount,
  nextBookings,
  bookingGroupByData,
  todayBookings
}) => {
  const { prev, next, all } = bookingCount;
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
      width: "100%"
    },
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

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
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
                            <Box textAlign="right">
                              {prev}/{next}
                            </Box>
                          </Typography>
                          <Typography component="div">
                            <Box textAlign="right" fontSize={10}>
                              (Prev/Next)
                            </Box>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Typography variant="h3">{all}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <PieChart
                    title="전체 회의실 별 예약현황"
                    data={bookingGroupByData}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper} style={{ minHeight: "47vh" }}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.chartIconWrap}>
                      <EqualizerIcon
                        className={classes.timeIcon}
                        fontSize="large"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.title}
                    >
                      오늘 예약 리스트
                    </Typography>
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12}>
                        <Table className={classes.table} size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>회의 제목</TableCell>
                              <TableCell align="center">회의실</TableCell>
                              <TableCell align="center">시간</TableCell>
                              {/* <TableCell align="center">예약 부서</TableCell> */}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {todayBookings ? (
                              todayBookings.length > 0 ? (
                                todayBookings.map((item, i) => (
                                  <TableRow key={i}>
                                    <TableCell align="center">
                                      {item.title}
                                    </TableCell>
                                    <TableCell align="center">
                                      {item.roomId.name}
                                    </TableCell>
                                    <TableCell align="center">
                                      {item.startTime}~{item.endTime}
                                    </TableCell>
                                    {/* <TableCell align="center">
                                      {item.department}
                                    </TableCell> */}
                                  </TableRow>
                                ))
                              ) : (
                                <TableRow key="empbody">
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    colSpan={4}
                                  >
                                    회의 리스트가 존재하지 않습니다.
                                  </TableCell>
                                </TableRow>
                              )
                            ) : (
                              ""
                            )}
                          </TableBody>
                        </Table>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
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
                      <TableCell align="center">회의실</TableCell>
                      <TableCell align="center">일자</TableCell>
                      <TableCell align="center">시간</TableCell>
                      <TableCell align="center">예약 부서</TableCell>
                      <TableCell align="center">예약자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {nextBookings ? (
                      nextBookings.length > 0 ? (
                        nextBookings.map(item => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              {item.title}
                            </TableCell>
                            <TableCell align="center">
                              {item.roomId.name}
                            </TableCell>
                            <TableCell align="center">{item.date}</TableCell>
                            <TableCell align="center">
                              {item.startTime}~{item.endTime}
                            </TableCell>
                            <TableCell align="center">
                              {item.department}
                            </TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow key="empbody">
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            colSpan={6}
                          >
                            회의 리스트가 존재하지 않습니다.
                          </TableCell>
                        </TableRow>
                      )
                    ) : (
                      ""
                    )}
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

export default MainPresenter;
