// pages/Books.tsx
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

// Sample book data — replace with your actual data or API call
const booksData: Book[] = [
    // {
    //     id: "1",
    //     title: "The History of Christ Apostolic Church",
    //     author: "Pastor S.O. Odunaiya",
    //     description:
    //         "A comprehensive account of the founding and growth of Christ Apostolic Church from its earliest days to the modern era.",
    //     coverImage: "",
    //     category: "Church History",
    //     year: 2010,
    //     downloadUrl: "#",
    // },
    // {
    //     id: "2",
    //     title: "Principles of Prayer and Fasting",
    //     author: "Pastor E.A. Adeboye",
    //     description:
    //         "An in-depth guide on the spiritual disciplines of prayer and fasting, rooted in scripture and practical application.",
    //     coverImage: "",
    //     category: "Devotional",
    //     year: 2015,
    //     externalUrl: "#",
    // },
    // {
    //     id: "3",
    //     title: "Understanding the Holy Spirit",
    //     author: "Rev. J.A. Babalola",
    //     description:
    //         "Exploring the person, power, and gifts of the Holy Spirit as taught in the Bible and experienced in the Apostolic faith.",
    //     coverImage: "",
    //     category: "Theology",
    //     year: 2018,
    //     downloadUrl: "#",
    // },
    // {
    //     id: "4",
    //     title: "Songs of Zion: A Devotional Companion",
    //     author: "CAC Publications",
    //     description:
    //         "A devotional book based on the hymns and spiritual songs of the church, with daily reflections and prayers.",
    //     coverImage: "",
    //     category: "Devotional",
    //     year: 2020,
    //     downloadUrl: "#",
    // },
    // {
    //     id: "5",
    //     title: "Christian Family Life",
    //     author: "Pastor M.O. Akinosun",
    //     description:
    //         "Biblical guidance for building strong Christian families, covering marriage, parenting, and household faith.",
    //     coverImage: "",
    //     category: "Family",
    //     year: 2019,
    //     externalUrl: "#",
    // },
    // {
    //     id: "6",
    //     title: "Walking in Faith: Daily Devotional",
    //     author: "CAC Itedo Yiyanju",
    //     description:
    //         "A 365-day devotional guide produced by our local assembly to encourage daily walk with God.",
    //     coverImage: "",
    //     category: "Devotional",
    //     year: 2023,
    //     downloadUrl: "#",
    // },
];

const categories = ["All", ...Array.from(new Set(booksData.map((b) => b.category)))];

const Books = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBooks = booksData.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" || book.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                <BookOpen className="h-4 w-4" />
                                Church Library
                            </div>
                            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Books & Publications
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Explore our collection of books, devotionals, and publications to
                                deepen your faith and understanding of God's word.
                            </p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                </section>

                {/* Search and Filter Section */}
                <section className="border-b border-border bg-background/80 py-6 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            {/* Search */}
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search books by title, author..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex items-center gap-2 overflow-x-auto">
                                <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category)}
                                        className="shrink-0"
                                    >
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
                                <BookOpen className="mb-4 h-16 w-16 text-muted-foreground/40" />
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    No books found
                                </h3>
                                <p className="text-muted-foreground">
                                    Once the books are available, you will be the first to see it here
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6 text-sm text-muted-foreground">
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
        <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
            {/* Cover Image / Placeholder */}
            <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                {book.coverImage ? (
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-primary/60">
                        <BookOpen className="h-12 w-12" />
                        <span className="text-xs font-medium uppercase tracking-widest">
                            {book.category}
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {book.title}
                </h3>

                <p className="mb-2 text-sm font-medium text-primary/80">
                    {book.author}
                </p>

                <p className="mb-4 line-clamp-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {book.description}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{book.year}</span>

                    <div className="flex gap-2">
                        {book.downloadUrl && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={book.downloadUrl} download>
                                    <Download className="mr-1.5 h-3.5 w-3.5" />
                                    Download
                                </a>
                            </Button>
                        )}

                        {book.externalUrl && (
                            <Button variant="outline" size="sm" asChild>
                                <a
                                    href={book.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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