'use client'

import React from 'react'
import { poppins } from '@/app/ui/fonts'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Star, Coffee, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function About() {
  const route = useRouter();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4`}>
            About Our Bookstore
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the magic of reading with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className={`${poppins.className} text-2xl font-semibold mb-4 text-gray-800 dark:text-white`}>Our Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded with a passion for literature, our bookstore has been a haven for book lovers for over two decades. We believe in the power of stories to inspire, educate, and transform lives.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <Heart className="h-5 w-5 mr-2" />
                <span>Spreading the love of reading since 2000</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className={`${poppins.className} text-2xl font-semibold mb-4 text-gray-800 dark:text-white`}>Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;re on a mission to make quality literature accessible to all. Our carefully curated collection caters to diverse tastes and age groups, ensuring there&apos;s something for every reader.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <Star className="h-5 w-5 mr-2" />
                <span>Curating excellence in literature</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <BookOpen className="h-10 w-10 mb-2" />
              <p className="text-2xl font-bold">10,000+</p>
              <p className="text-sm opacity-75">Books</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Users className="h-10 w-10 mb-2" />
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-sm opacity-75">Happy Readers</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Award className="h-10 w-10 mb-2" />
              <p className="text-2xl font-bold">50+</p>
              <p className="text-sm opacity-75">Awards</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={()=> route.push('/books')} size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Our Collection
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className={`${poppins.className} text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4`}>Visit Us Today</p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">75760, Pakistan, Karachi</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Open daily: 9AM - 9PM</p>
          <div className="flex justify-center items-center text-blue-600 dark:text-blue-400">
            <Coffee className="h-5 w-5 mr-2" />
            <span>Cozy reading nooks and café on-site</span>
          </div>
        </div>
      </div>
    </div>
  )
}