'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    AlertDialog,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
} from '@/components/ui/alert-dialog'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { poppins } from '../ui/fonts'

const formSchema = z.object({
    title: z.string().min(2).max(50),
    desc: z.string().min(2).max(150),
    author: z.string().min(2).max(20),
    available: z.boolean().default(false),
    image: z.string().url()
})

interface Book {
    id: number
    title: string
    desc: string
    author: string
    available: boolean
    image: string
}

export default function AdminPage() {
    const route = useRouter()
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)
    const [showDeleteAlert, setShowDeleteAlert] = useState<number | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            author: "",
            available: true,
            image: ""
        },
    })

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

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const id = Math.floor(Math.random() * 1000000)
        const sendData = { ...values, id }

        try {
            const response = await fetch('/api/books', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sendData)
            })

            if (!response.ok) {
                throw new Error("Failed to add book")
            }

            const newBook = await response.json()
            setBooks(prevBooks => [newBook, ...prevBooks])
            form.reset()
            window.location.reload()
        } catch (error) {
            console.error("Failed to add book: " + error)
        }
    }

    async function deleteBook(id: number) {
        try {
            const response = await fetch(`/api/books?id=${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Failed to delete book')
            }
            const result = await response.json()
            console.log(result.message)
            route.refresh()
        } catch (error) {
            console.error('Error deleting book:', error)
        }
    }

    return (
        <div>
            <Navbar />
            <hr className="bg-gray-500" />

            <h1 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:text-center my-12`}>
                Admin Dashboard
            </h1>
            <div className='max-w-7xl flex mx-auto p-3'>
                <div className='flex md:flex-row flex-col justify-between w-full gap-5'>
                    <div className='w-full md:w-1/2'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter title.." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is the title of your book
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="desc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter description.." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is the description of your book
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="author"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Author</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter author name.." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is the Author of the book
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="available"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                                <FormLabel>Available?</FormLabel>
                                                <FormDescription>
                                                    Is this book available or not?
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Image URL</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="url"
                                                    placeholder="Enter Image URL.."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Provide a link to the image
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>

                    <div className='w-full md:w-1/2'>
                        {loading ? (
                            <div className='w-full flex justify-center min-h-screen items-center'><Loader /></div>
                        ) : (
                            [...books].reverse().map((book) => (
                                <Card key={book.id} className='w-full flex justify-between items-center my-5'>
                                    <CardHeader>
                                        <CardTitle>{book.title}</CardTitle>
                                        <CardDescription>{book.desc}</CardDescription>
                                        <CardDescription>Author: {book.author}</CardDescription>
                                    </CardHeader>
                                    <CardContent className='flex gap-5 items-center'>
                                        <Button onClick={()=> route.push(`/edit/${book.id}`)}>Edit</Button>
                                        <Button variant={'destructive'} onClick={() => {
                                            setShowDeleteAlert(book.id)
                                        }}>Delete</Button>
                                    </CardContent>

                                    <AlertDialog open={showDeleteAlert === book.id} onOpenChange={(open) => {
                                        if (!open) setShowDeleteAlert(null)
                                    }}>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Do you want to delete this book from data?
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel onClick={() => setShowDeleteAlert(null)}>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => {
                                                    setShowDeleteAlert(null)
                                                    deleteBook(book.id)
                                                    window.location.reload()
                                                }}>
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <hr className="bg-gray-500" />
            <Footer />
        </div>
    )
}