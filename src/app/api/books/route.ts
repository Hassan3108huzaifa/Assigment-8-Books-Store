import { NextResponse, NextRequest } from "next/server";
export type Book = {
  id: number;
  title: string;
  desc: string;
  author: string;
  available: boolean;
  image: string;
};
const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    desc: "A classic novel about racial injustice in the American South",
    author: "Harper Lee",
    available: true,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "1984",
    desc: "A dystopian novel set in a totalitarian society",
    author: "George Orwell",
    available: true,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    desc: "A romantic novel of manners set in Georgian England",
    author: "Jane Austen",
    available: false,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    title: "The Great Gatsby",
    desc: "A novel about the American Dream in the Roaring Twenties",
    author: "F. Scott Fitzgerald",
    available: true,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    desc: "A landmark novel in the magical realism style",
    author: "Gabriel García Márquez",
    available: true,
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    desc: "A controversial novel about teenage alienation and angst",
    author: "J.D. Salinger",
    available: false,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    title: "Brave New World",
    desc: "A dystopian novel envisioning a genetically engineered future",
    author: "Aldous Huxley",
    available: true,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    desc: "An epic high-fantasy novel",
    author: "J.R.R. Tolkien",
    available: true,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    title: "The Hobbit",
    desc: "A children's fantasy novel and prelude to The Lord of the Rings",
    author: "J.R.R. Tolkien",
    available: false,
    image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    title: "The Chronicles of Narnia",
    desc: "A series of high fantasy novels",
    author: "C.S. Lewis",
    available: true,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 11,
    title: "The Hitchhiker's Guide to the Galaxy",
    desc: "A comedy science fiction series",
    author: "Douglas Adams",
    available: true,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 12,
    title: "The Da Vinci Code",
    desc: "A mystery thriller novel",
    author: "Dan Brown",
    available: false,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    title: "The Hunger Games",
    desc: "A dystopian novel set in a post-apocalyptic world",
    author: "Suzanne Collins",
    available: true,
    image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 14,
    title: "The Alchemist",
    desc: "A philosophical novel about a young Andalusian shepherd",
    author: "Paulo Coelho",
    available: true,
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 15,
    title: "The Kite Runner",
    desc: "A novel about friendship, betrayal, and redemption set in Afghanistan",
    author: "Khaled Hosseini",
    available: false,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 16,
    title: "The Girl with the Dragon Tattoo",
    desc: "A psychological thriller novel",
    author: "Stieg Larsson",
    available: true,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 17,
    title: "The Fault in Our Stars",
    desc: "A young adult novel about cancer patients who fall in love",
    author: "John Green",
    available: true,
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 18,
    title: "The Martian",
    desc: "A science fiction novel about an astronaut stranded on Mars",
    author: "Andy Weir",
    available: false,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 19,
    title: "The Handmaid's Tale",
    desc: "A dystopian novel set in a totalitarian society",
    author: "Margaret Atwood",
    available: true,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 20,
    title: "The Pillars of the Earth",
    desc: "A historical novel about the building of a cathedral in 12th-century England",
    author: "Ken Follett",
    available: true,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 21,
    title: "The Name of the Wind",
    desc: "A fantasy novel, the first of The Kingkiller Chronicle series",
    author: "Patrick Rothfuss",
    available: false,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 22,
    title: "The Giver",
    desc: "A young adult dystopian novel",
    author: "Lois Lowry",
    available: true,
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  }
];


export function getBooks(): Book[] {
  return books;
}

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  try {
    const newBook: Book = await request.json();
    books.push(newBook);
    return NextResponse.json({ message: "Book added successfully", book: newBook }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to add book: ${error}` }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedBook: Partial<Book> = await request.json();
    const bookIndex = books.findIndex(book => book.id === updatedBook.id);

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return NextResponse.json({ message: "Book updated successfully", book: books[bookIndex] });
  } catch (error) {
    return NextResponse.json({ message: `Failed to update book: ${error}` }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "Book ID is required" }, { status: 400 });
    }

    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];
    return NextResponse.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    return NextResponse.json({ message: `Failed to delete book: ${error}` }, { status: 500 });
  }
}