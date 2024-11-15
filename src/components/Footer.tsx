import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We&apos;re passionate about bringing the best books to our readers. Discover new worlds, one page at a time.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link href="/books" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Books</Link></li>
              <li><Link href="/#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100067756576220" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://x.com/huzaifaBhai3108" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/hassan3108huzaifa" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/hassanrj" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay updated with our latest releases and promotions.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Books Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}