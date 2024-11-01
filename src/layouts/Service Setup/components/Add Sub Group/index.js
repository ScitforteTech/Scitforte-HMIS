/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React, { useState } from 'react'
import {
  Typography,
  Box,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import MDButton from "components/MDButton";
import DataTable from 'examples/Tables/DataTable';
import data from "./data"
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


function AddSubGroup() {
  const { columns, rows } = data();

  const [selectedLetter, setSelectedLetter] = useState("All");

  const alphabet = [
    "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    // Implement your filtering logic here if needed
    // For example, filter rows based on the selected letter
  };

  return (
    <div className='space-y-8'>
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Add Sub Group
      </Typography>

      <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
        <Typography variant="subtitle1" className="text-white">
          Add Sub Group
        </Typography>
      </Box>

      <Box className="flex items-center gap-5 ml-5">
  <Box className="flex items-center gap-2" sx={{ minWidth: "300px" }}>
    <p className="text-xs flex items-center font-semibold">Group: <span className='text-red-600 font-bold'>*</span></p>
    <TextField
            variant="outlined"
            fullWidth
            name="group"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Doctor">Blood Bank</MenuItem>
            {/* Add other options as needed */}
          </TextField>
  </Box>
  <Box className="flex items-center gap-2" sx={{ minWidth: "300px" }}>
    <p className="text-xs font-semibold" style={{ whiteSpace: "nowrap" }}>
      Sub Group: <span className='text-red-600 font-bold'>*</span>
    </p>
    <TextField variant="outlined" fullWidth name="subgroup" />
  </Box>
</Box>


      {/* Buttons */}
      <Grid container  sx={{ marginTop: 3}} className="place-content-center justify-center p-2 gap-2">
      <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">Save</button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <button className="text-xs">Cancel</button>
          </MDButton>
        </Grid>
      </Grid>

       {/* Hyperlink Section */}
       <Box display="flex" justifyContent="center" my={2} flexWrap="wrap" gap={1}>
        {alphabet.map((letter) => (
          <MDButton
            key={letter}
            variant="text"
            style={{
              backgroundColor: selectedLetter === letter ? "#1694c4" : "transparent",
              color: selectedLetter === letter ? "white" : "#1694c4",
              minWidth: "30px",
              minHeight: "30px",
              borderRadius: 0,
            }}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </MDButton>
        ))}
      </Box>

      <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
        <Typography variant="subtitle1" className="text-white">
          Searched Added Sub Groups
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries
            isSorted
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

       {/* Buttons */}
       <Grid container  sx={{ marginTop: 3}} className="place-content-center justify-center p-2 gap-2">
      <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs"><SkipPreviousIcon /></button>
          </MDButton>
        </Grid>
        <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs"><SkipNextIcon /></button>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddSubGroup