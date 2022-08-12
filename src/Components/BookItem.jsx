import { Link } from 'react-router-dom';

export function BookItem(book) {

    return(
        <>
            <li>
                {book.title} ({book.publisher_date})  <br/>
                {book.pages}-{book.language} <br/>
                <Link to={'/book/'+book.ID} >
                    <a>Details</a> <br/>
                </Link>
                <img src={book.cover} width='100px' />
            </li>
        </>
    )

}