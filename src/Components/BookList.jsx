import { useState, useEffect } from 'react';
import * as API from '../services/data';
import { BookItem } from './BookItem';

export function BookList() {
    // una funcion para almacenar el estado de los libros -- funcion que permita cambiar el estado de esos libros
    const [ books, setBooks ] = useState([]); 

    //para peticion de datos
    useEffect(() => {
      API.getBooks().then(setBooks);
    })


    return(
        <>
            {/* trae el json con toda la informacion de los libros */}
            {/* {JSON.stringify(books)} */}

            <ul>
                {
                    books.map(book => (
                        <BookItem key={book.ID} {...book} />
                    ))
                }
            </ul>
        </>
    )
}