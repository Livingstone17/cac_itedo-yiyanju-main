import { useState } from "react";
import { BookOpen, ExternalLink, Download, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: string;
  year: number;
  downloadUrl?: string;
  externalUrl?: string;
}

const booksData: Book[] = [];

const categories = ["All", ...Array.from(new Set(booksData.map((b) => b.category)))];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()) || book.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="bg-church-gold-400/10 text-church-gold-500 dark:text-church-gold-300 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <BookOpen className="h-4 w-4" />
                Church Library
              </div>
              <h1 className="text-text dark:text-light mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Books & Publications</h1>
              <p className="text-text-300 dark:text-text-400 text-lg">Explore our collection of books, devotionals, and publications to deepen your faith and understanding of God's word.</p>
            </div>
          </div>

          <div className="bg-church-gold-400/5 dark:bg-church-gold-400/5 absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-church-blue-400/5 dark:bg-church-blue-400/5 absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
        </section>

        {/* Search & Filter */}
        <section className="border-light-400 bg-light/80 dark:border-dark-500 dark:bg-dark-400/80 border-b py-6 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="text-text-300 dark:text-text-400 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input type="text" placeholder="Search books by title, author..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400 pl-10" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter className="text-text-300 dark:text-text-400 h-4 w-4 shrink-0" />
                {categories.map((category) => (
                  <Button key={category} size="sm" onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 shrink-0" : "border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 shrink-0 border bg-transparent"}>
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredBooks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <BookOpen className="text-text-400/40 dark:text-text-500/40 mb-4 h-16 w-16" />
                <h3 className="text-text dark:text-light mb-2 text-xl font-semibold">No books found</h3>
                <p className="text-text-300 dark:text-text-400">Once the books are available, you will be the first to see it here</p>
              </div>
            ) : (
              <>
                <div className="text-text-300 dark:text-text-400 mb-6 text-sm">
                  Showing {filteredBooks.length} book
                  {filteredBooks.length !== 1 ? "s" : ""}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="group border-light-400 bg-light shadow-soft hover:border-church-gold-400/30 hover:shadow-medium dark:border-dark-500 dark:bg-dark-400 flex flex-col overflow-hidden rounded-xl border transition-all duration-300">
      {/* Cover / Placeholder */}
      <div className="from-church-blue-100/40 via-church-blue-50/20 to-church-gold-50/30 dark:from-dark-500 dark:via-dark-600 dark:to-dark-500 relative flex h-48 items-center justify-center bg-linear-to-br">
        {book.coverImage ? (
          <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-church-blue-300 dark:text-church-blue-200 flex flex-col items-center gap-2">
            <BookOpen className="h-12 w-12" />
            <span className="text-xs font-medium tracking-widest uppercase">{book.category}</span>
          </div>
        )}

        <span className="bg-light/90 text-text dark:bg-dark-400/90 dark:text-light absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">{book.category}</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-text group-hover:text-church-gold-400 dark:text-light mb-1 text-lg leading-tight font-semibold transition-colors">{book.title}</h3>

        <p className="text-church-gold-500 dark:text-church-gold-300 mb-2 text-sm font-medium">{book.author}</p>

        <p className="text-text-300 dark:text-text-400 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">{book.description}</p>

        <div className="border-light-400 dark:border-dark-500 flex items-center justify-between border-t pt-4">
          <span className="text-text-300 dark:text-text-400 text-xs">{book.year}</span>

          <div className="flex gap-2">
            {book.downloadUrl && (
              <Button size="sm" asChild className="border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 border bg-transparent">
                <a href={book.downloadUrl} download>
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Download
                </a>
              </Button>
            )}

            {book.externalUrl && (
              <Button size="sm" asChild className="border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 border bg-transparent">
                <a href={book.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Read Online
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

// const booksData: Book[] = [
//   {
//     id: "1",
//     title: "The History of Christ Apostolic Church",
//     author: "Pastor S.O. Odunaiya",
//     description: "A comprehensive account of the founding and growth of Christ Apostolic Church from its earliest days to the modern era.",
//     coverImage: "",
//     category: "Church History",
//     year: 2010,
//     downloadUrl: "#",
//   },
//   {
//     id: "2",
//     title: "Principles of Prayer and Fasting",
//     author: "Pastor E.A. Adeboye",
//     description: "An in-depth guide on the spiritual disciplines of prayer and fasting, rooted in scripture and practical application.",
//     coverImage: "",
//     category: "Devotional",
//     year: 2015,
//     externalUrl: "#",
//   },
//   {
//     id: "3",
//     title: "Understanding the Holy Spirit",
//     author: "Rev. J.A. Babalola",
//     description: "Exploring the person, power, and gifts of the Holy Spirit as taught in the Bible and experienced in the Apostolic faith.",
//     coverImage: "",
//     category: "Theology",
//     year: 2018,
//     downloadUrl: "#",
//   },
//   {
//     id: "4",
//     title: "Songs of Zion: A Devotional Companion",
//     author: "CAC Publications",
//     description: "A devotional book based on the hymns and spiritual songs of the church, with daily reflections and prayers.",
//     coverImage: "",
//     category: "Devotional",
//     year: 2020,
//     downloadUrl: "#",
//   },
//   {
//     id: "5",
//     title: "Christian Family Life",
//     author: "Pastor M.O. Akinosun",
//     description: "Biblical guidance for building strong Christian families, covering marriage, parenting, and household faith.",
//     coverImage: "",
//     category: "Family",
//     year: 2019,
//     externalUrl: "#",
//   },
//   {
//     id: "6",
//     title: "Walking in Faith: Daily Devotional",
//     author: "CAC Itedo Yiyanju",
//     description: "A 365-day devotional guide produced by our local assembly to encourage daily walk with God.",
//     coverImage: "",
//     category: "Devotional",
//     year: 2023,
//     downloadUrl: "#",
//   },
// ];
