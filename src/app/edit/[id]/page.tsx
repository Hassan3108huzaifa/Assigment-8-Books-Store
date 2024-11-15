'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { use } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

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

export default function EditBookPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const [book, setBook] = useState<Book | null>(null)
    const { id } = use(params)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            author: "",
            available: false,
            image: ""
        },
    })

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`/api/books/${id}`)
                if (!response.ok) {
                    throw new Error("Failed to fetch book data")
                }
                const data: Book = await response.json()
                setBook(data)
                form.reset({
                    title: data.title,
                    desc: data.desc,
                    author: data.author,
                    available: data.available,
                    image: data.image
                })
            } catch (error) {
                console.error("Failed to fetch book: " + error)
            }
        }

        fetchBook()
    }, [id, form])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch(`/api/books/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error("Failed to update book")
            }

            const updatedBook = await response.json()
            console.log("Book updated successfully:", updatedBook)
            router.push('/admin')
        } catch (error) {
            console.error("Failed to update book: " + error)
        }
    }



    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
                {book ? (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
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
                                            <Input {...field} />
                                        </FormControl>
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
                                            <Input {...field} />
                                        </FormControl>
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
                                            <FormLabel>Available</FormLabel>
                                            <FormDescription>
                                                Is this book available?
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
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Update Book</Button>
                        </form>
                    </Form>
                ) : (
                    <div className="max-w-7xl mx-auto py-12">
                        <div className="w-full flex justify-center">
                            <Loader />
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </>

    )
}