import { BookList } from './Components/BookList';
import logo from './img/openlibra-logo.png';

export function App() {
  
  return (
    <>
      <img src={logo} alt="logo openlibrary" height='50px' />
      <BookList />

    </>
  )
}