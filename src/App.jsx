import { BookList } from './Components/BookList';
import { Header } from './Components/Header';
import { BookDetail } from './Components/BookDetail';
import { Routes, Route } from 'react-router-dom';

export function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='book/:bookId' element={<BookDetail />} />
      </Routes>
      {/* <BookList /> */}

    </>
  )
}