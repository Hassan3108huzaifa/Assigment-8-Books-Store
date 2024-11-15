'use client'
import React, { useEffect, useState } from 'react'
import { poppins } from '@/app/ui/fonts'
import BookCard from '@/components/BookCard'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Book {
    id: number
    title: string
    desc: string
    author: string
    available: boolean
    image: string
}

const Books = () => {


    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/api/books')
                if (!response.ok) {
                    throw new Error("Failed to fetch books data")
                }
                const data: Book[] = await response.json()
                setBooks(data)
            } catch (error) {
                console.error("Failed to fetch: " + error)
            } finally {
                setLoading(false)
            }
        }

        fetchBooks()
    }, [])



    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <h1 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-12`}>
                    Explore Our Books
                </h1>
                {loading ? (
                    <div className="max-w-7xl mx-auto py-12">
                        <div className="w-full flex justify-center">
                            <Loader />
                        </div>
                    </div>
                ) : books && books.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...books].reverse().map((book) => (
                            <BookCard key={book.id} {...book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 my-20">No books available.</div>
                )}
            </div>
            <Footer />
        </div>

    )
}

export default Books