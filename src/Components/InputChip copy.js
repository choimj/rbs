import React from "react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import { makeStyles } from "@material-ui/core/styles";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "strawberry1", label: "Strawberry" },
  { value: "strawberry2", label: "Strawberry" },
  { value: "strawberry3", label: "Strawberry" },
  { value: "strawberry4", label: "Strawberry" },
  { value: "strawberry5", label: "Strawberry" }
];

const useStyles = makeStyles(theme => ({
  select: {
    width: "100%"
  }
}));

const InputChip = () => {
  const classes = useStyles();
  const animatedComponents = makeAnimated();

  return (
    <ReactSelect
      // defaultValue={[options[2], options[3]]}
      components={animatedComponents}
      closeMenuOnSelect={false}
      isMulti
      name="participant"
      options={options}
      className={classes.select}
      classNamePrefix="select"
    />
  );
};

export default InputChip;
