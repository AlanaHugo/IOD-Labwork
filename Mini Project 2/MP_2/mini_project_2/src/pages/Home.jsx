import React, { useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useGutendexBooks } from '../hooks/bookdata';
import { useFilteredBooks } from '../hooks/bookfilter';
import BookFilters from '../components/FilterControls';
import BookGrid from '../components/FilteredBookList';
import ClearFiltersButton from "../components/ClearFiltersButton";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const { books, loading, error } = useGutendexBooks('');
  const { allSubjects, filteredBooks } = useFilteredBooks(books, searchTerm, selectedSubject);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedSubject('');
  };

  return (
    <>
      <BookFilters
        searchTerm={searchTerm}
        onSearchChange={e => setSearchTerm(e.target.value)}
        selectedSubject={selectedSubject}
        onSubjectChange={e => setSelectedSubject(e.target.value)}
        allSubjects={allSubjects}
      />

      {loading && <CircularProgress sx={{ margin: 4 }} />}
      {error && (
        <Typography color="error" sx={{ margin: 2 }}>
          Error: {error}
        </Typography>
      )}

      <BookGrid books={filteredBooks} />

      {(searchTerm || selectedSubject) && filteredBooks.length > 0 && (
        <ClearFiltersButton onClick={handleReset} />
      )}
    </>
  );
}
