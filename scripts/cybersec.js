

export async function init () {

    const books = (await axios.get("./data/cybersec/books.json")).data;

    let table = new DataTable('#books_table', {
        pageLength:1000,
        data:books,
        columns:[ {data:'title'}, {data:'year'}, {data:'topics'} ]
    });
}