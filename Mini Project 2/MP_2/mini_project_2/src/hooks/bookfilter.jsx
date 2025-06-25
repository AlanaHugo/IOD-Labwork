// src/hooks/useFilteredBooks.js
import { useMemo } from 'react';

export function useFilteredBooks(books, searchTerm, selectedSubject) {
  const allSubjects = useMemo(() => {
    const subjectSet = new Set();
    books.forEach(book =>
      book.subjects?.forEach(subj => subjectSet.add(subj))
    );
    return Array.from(subjectSet).sort();
  }, [books]);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const title = book.title?.toLowerCase() || '';
      const author = book.authors?.[0]?.name.toLowerCase() || '';
      const subjects = book.subjects?.join(' ').toLowerCase() || '';
      const keyword = searchTerm.toLowerCase() || '';

      const matchesKeyword =
        title.includes(keyword) ||
        author.includes(keyword) ||
        subjects.includes(keyword);

      const matchesSubject = !selectedSubject || book.subjects?.includes(selectedSubject);

      return matchesKeyword && matchesSubject;
    });
  }, [books, searchTerm, selectedSubject]);

  return { allSubjects, filteredBooks };
}