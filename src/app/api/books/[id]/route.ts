import { NextRequest, NextResponse } from "next/server";
import { getBooks, Book } from "../route";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const book = getBooks().find(book => book.id === id);
  
  if (book) {
    return NextResponse.json(book);
  } else {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const updatedBook: Partial<Book> = await request.json();
  const books = getBooks();
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }

  books[bookIndex] = { ...books[bookIndex], ...updatedBook };
  return NextResponse.json({ message: "Book updated successfully", book: books[bookIndex] });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const books = getBooks();
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];
  return NextResponse.json({ message: "Book deleted successfully", book: deletedBook });
}