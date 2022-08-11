export function BookItem(book) {

    return(
        <>
            <li>
                {book.title} ({book.publisher_date})  <br/>
                {book.pages}-{book.language} <br/>
                <a href="#">Details</a> <br/>
                <img src={book.cover} width='100px' />
            </li>
        </>
    )

}