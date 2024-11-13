import React from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface BookProps {
    id: number
    title: string
    desc: string
    author: string
    available: boolean
    image: string
}

export default function BookCard({ title, desc, author, available, image }: BookProps) {
    return (
        <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                />
                <Badge
                    variant={available ? "default" : "destructive"}
                    className="absolute top-2 right-2"
                >
                    {available ? "Available" : "Out of Stock"}
                </Badge>
            </div>
            <CardHeader>
                <CardTitle className="line-clamp-1">{title}</CardTitle>
                <CardDescription className="line-clamp-1">by {author}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                    Details
                </Button>
                <Button disabled={!available}>
                    {available ? (
                        <>
                            <Check className="mr-2 h-4 w-4" /> Add to Cart
                        </>
                    ) : (
                        <>
                            <X className="mr-2 h-4 w-4" /> Out of Stock
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}