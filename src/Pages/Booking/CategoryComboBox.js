import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import CurrentTimeBox from "./CurrentTimeBox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    textAlign: "left"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const CategoryComboBox = ({ compCategoryList }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    category: ""
  });

  // const inputLabel = React.useRef(null);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.category}
          onChange={handleChange("category")}
          name="category"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "age" }}
        >
          {compCategoryList.map((item, i) => (
            <option key={i} value={"cate_" + item.cateCode}>
              {item.cateTitle}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>
          <CurrentTimeBox />
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default CategoryComboBox;
