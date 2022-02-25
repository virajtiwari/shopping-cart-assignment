import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './DropDown.scss';

export default function SelectLabels({
  listItem,
  handleChangeAction,
  selectedCategory,
}) {
  const [ddValue, setDDValue] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setDDValue(value);
    handleChangeAction(value);
  };

  useEffect(() => {
    if(selectedCategory?.name !== '') setDDValue(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, width: "80%", background:'#c02a58', color:"#ffffff" }}>
        <Select
          value={ddValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Categories List" }}
        >
          {listItem?.map((item) => (
            <MenuItem value={item}>{item?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
