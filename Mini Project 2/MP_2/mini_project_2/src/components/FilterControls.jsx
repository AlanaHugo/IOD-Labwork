// src/components/BookFilters.js
import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function BookFilters({
  searchTerm,
  onSearchChange,
  selectedSubject,
  onSubjectChange,
  allSubjects,
}) {
  return (
    <>
      <TextField
        label="Search books"
        variant="outlined"
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ margin: 2, width: '300px' }}
        placeholder="e.g. Dracula, Austen, Romance"
      />

      <FormControl sx={{ margin: 2, width: '300px' }}>
        <InputLabel>Filter by subject</InputLabel>
        <Select
          value={selectedSubject}
          onChange={onSubjectChange}
          label="Filter by subject"
        >
          <MenuItem value="">All Subjects</MenuItem>
          {allSubjects.map(subject => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
