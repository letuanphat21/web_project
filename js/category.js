// Array of book objects categorized by genre
const genres = {
    literature: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A classic novel about the American dream.",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "book-detail.html",
        },
        {
            title: "1984",
            author: "George Orwell",
            description: "A dystopian novel about totalitarianism.",
            image: "https://bizweb.dktcdn.net/100/326/228/products/1984-by-george-orwell-bookworm-hanoi-038adcb4-d1cc-49ee-85eb-50f188229ecf.jpg?v=1580974089733",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "book-detail.html",
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "A romantic novel about class and love.",
            image: "https://cdn2.penguin.com.au/covers/original/9780141949055.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "book-detail.html"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A novel about racial injustice in the Deep South.",
            image: "https://cdn2.penguin.com.au/covers/original/9781784752637.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "book-detail.html"
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            description: "A story of teenage angst and alienation.",
            image: "https://m.media-amazon.com/images/I/8125BDk3l9L.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "book-detail.html"
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            description: "An epic tale of obsession and revenge at sea.",
            image: "https://upload.wikimedia.org/wikipedia/vi/8/85/Moby_Dick-C%C3%A1_voi_tr%E1%BA%AFng_%28s%C3%A1ch%29.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "book-detail.html"
        }
        
    ],
    science: [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            description: "Explores time, space, and black holes.",
            image: "https://m.media-amazon.com/images/I/91ebghaV-eL._AC_UF1000,1000_QL80_.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "science-book1.html"
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            description: "Focuses on evolution and genes.",
            image: "https://m.media-amazon.com/images/I/61CXvkfdXlL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "science-book2.html"
        },
        {
            title: "Cosmos",
            author: "Carl Sagan",
            description: "A journey through the universe.",
            image: "https://m.media-amazon.com/images/I/710C5x4MzwL.jpg",
            badge: "FREE",
            badgeClass: "badge-free",
            link: "science-book3.html"
        },
        {
            title: "The Immortal Life of Henrietta Lacks",
            author: "Rebecca Skloot",
            description: "The story behind HeLa cells.",
            image: "https://m.media-amazon.com/images/I/81coyP8S-ZL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "science-book4.html"
        },
        {
            title: "The Universe in a Nutshell",
            author: "Stephen Hawking",
            description: "An intro to modern physics.",
            image: "https://upload.wikimedia.org/wikipedia/en/6/6c/Cover_Universe_in_a_nutshell.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "science-book5.html"
        },
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            description: "Covers time and space concepts.",
            image: "https://librireading.com/wp-content/uploads/2020/10/A-brief-history-of-time.jpeg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "science-book6.html"
        }
    ],
    history: [
        {
            title: "A Brief History of Humankind",
            author: "Yuval Noah Harari",
            description: "Explores the history of humanity.",
            image: "https://cdn0.fahasa.com/media/catalog/product/7/1/713jiomo3ul.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "history-book1.html"
        },
        {
            title: "The Silk Roads",
            author: "Peter Frankopan",
            description: "Reveals the impact of trade routes.",
            image: "https://m.media-amazon.com/images/I/91A1-6ny+pL.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "history-book2.html"
        },
        {
            title: "Guns, Germs, and Steel",
            author: "Jared Diamond",
            description: "Analyzes the rise of civilizations.",
            image: "https://m.media-amazon.com/images/I/61V8g4GgqdL._AC_UF1000,1000_QL80_.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "history-book3.html"
        },
        {
            title: "The Wright Brothers",
            author: "David McCullough",
            description: "Chronicles aviation pioneers.",
            image: "https://m.media-amazon.com/images/I/71TYHByzngL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "history-book4.html"
        },
        {
            title: "A People's History",
            author: "Howard Zinn",
            description: "A new perspective on U.S. history.",
            image: "https://m.media-amazon.com/images/I/71Zb-D8NaGL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "history-book5.html"
        },
        {
            title: "The Diary Of A Young Girl",
            author: "Anne Frank",
            description: "The story of Anne Frank's life.",
            image: "https://m.media-amazon.com/images/I/513xtke0UHL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "history-book6.html"
        }        
    ],
    children: [
        {
            title: "The Very Hungry Caterpillar",
            author: "Eric Carle",
            description: "A caterpillar eats his way to becoming a butterfly.",
            image: "https://thebookland.vn/thumbnail_1200/9780241003008.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book1.html"
        },
        {
            title: "Where the Wild Things Are",
            author: "Maurice Sendak",
            description: "A boy's journey to a land of wild creatures.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeY8rdJ186ZG5eoAnu7PG2DqOBWqgSub8lg&s",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book2.html"
        },
        {
            title: "Goodnight Moon",
            author: "Margaret Wise Brown",
            description: "A soothing bedtime ritual in a cozy room.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGrHEGLyv4un4_lNiJkdyTfsEV4InKSCxgg&s",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book3.html"
        },
        {
            title: "Corduroy",
            author: "Don Freeman",
            description: "A teddy bear's adventure to find a lost button.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjZT2AUiimki6h88EfeVtD53WYa8qgWIFig&s",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book4.html"
        },
        {
            title: "The Snowy Day",
            author: "Ezra Jack Keats",
            description: "A boy explores the magic of fresh snow.",
            image: "https://upload.wikimedia.org/wikipedia/en/6/64/SnowyDayKeats.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book5.html"
        },
        {
            title: "Giraffes Can't Dance",
            author: "Giles Andreae",
            description: "A giraffe finds his own rhythm.",
            image: "https://m.media-amazon.com/images/I/71BXMB8-ZwL._AC_UF894,1000_QL80_.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "children-book7.html"
        }        
    ],
    mentality: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            description: "How tiny changes lead to remarkable results.",
            image: "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book1.html"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "A guide to living in the present moment.",
            image: "https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book2.html"
        },
        {
            title: "Mindset",
            author: "Carol S. Dweck",
            description: "Difference between fixed and growth mindsets.",
            image: "https://m.media-amazon.com/images/I/71wEDMAAnOL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book3.html"
        },
        {
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            description: "A counterintuitive approach to living a good life.",
            image: "https://librireading.com/wp-content/uploads/2020/10/The-subtle-art-of-not-giving-a-F.jpeg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book4.html"
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "The two systems that drive human thought.",
            image: "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book5.html"
        },
        {
            title: "Man's Search for Meaning",
            author: "Viktor E. Frankl",
            description: "Journey through finding purpose in adversity.",
            image: "https://m.media-amazon.com/images/I/819Pl1nP0ZL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "mentality-book6.html"
        }
    ],
    economy: [
        {
            title: "Capital in the Twenty-First Century",
            author: "Thomas Piketty",
            description: "Dive into wealth inequality and economic history.",
            image: "https://m.media-amazon.com/images/I/61FuwnW2QeL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "economy-book1.html"
        },
        {
            title: "The Wealth of Nations",
            author: "Adam Smith",
            description: "The foundational text of modern economics.",
            image: "https://images-na.ssl-images-amazon.com/images/I/71G4ERw6JRL.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "economy-book2.html"
        },
        {
            title: "Freakonomics",
            author: "Steven D. Levitt & Stephen J. Dubner",
            description: "Hidden incentives behind everyday choices.",
            image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_128582.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "economy-book3.html"
        },
        {
            title: "The Big Short",
            author: "Michael Lewis",
            description: "A gripping account of the 2008 financial crisis.",
            image: "https://m.media-amazon.com/images/I/61qz6EqoNjL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "economy-book4.html"
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            description: "Lessons on wealth and financial freedom.",
            image: "https://gregory.ph/cdn/shop/products/BuyRichDadPoorDadinPhilippines-3_949c6c8a-0fb9-4c99-80d6-920b36dac648.jpg?v=1626535585",
            badge: "Free",
            badgeClass: "badge-free",
            link: "economy-book7.html"
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "Explains economic decision-making.",
            image: "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "economy-book8.html"
        }        
    ],    
    lifeSkills: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            description: "Build good habits and break bad ones.",
            image: "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "life-skills-book1.html"
        },
        {
            title: "The 7 Habits",
            author: "Stephen R. Covey",
            description: "Keys to personal and professional growth.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr-63vsawb4q0fAKTKQZgwqIN5gWI5z1zfg&s",
            badge: "Free",
            badgeClass: "badge-free",
            link: "life-skills-book2.html"
        },
        {
            title: "How to Win Friends",
            author: "Dale Carnegie",
            description: "Improve relationships and influence others.",
            image: "https://m.media-amazon.com/images/I/71vK0WVQ4rL.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "life-skills-book3.html"
        },
        {
            title: "Mindset",
            author: "Carol S. Dweck",
            description: "The power of a growth mindset.",
            image: "https://m.media-amazon.com/images/I/71wEDMAAnOL.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "life-skills-book4.html"
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            description: "Focus better in a distracted world.",
            image: "https://bizweb.dktcdn.net/100/351/397/products/deep-work.jpg?v=1723439381093",
            badge: "Free",
            badgeClass: "badge-free",
            link: "life-skills-book5.html"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "Live fully in the present moment.",
            image: "https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "life-skills-book6.html"
        }
    ],
    sports: [
        {
            title: "Open",
            author: "Andre Agassi",
            description: "A revealing tennis memoir.",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320520930i/6480781.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "sports-book1.html"
        },
        {
            title: "Shoe Dog",
            author: "Phil Knight",
            description: "The story of Nike's rise.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQzsKT9fYPAz_UHk3iqJMJb6mgBHRN-8VXA&s",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "sports-book2.html"
        },
        {
            title: "The Mamba Mentality",
            author: "Kobe Bryant",
            description: "Insights from a basketball legend.",
            image: "https://m.media-amazon.com/images/I/A1z7ywkr2wL._AC_UF1000,1000_QL80_.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "sports-book3.html"
        },
        {
            title: "Moneyball",
            author: "Michael Lewis",
            description: "How data revolutionized baseball.",
            image: "https://m.media-amazon.com/images/I/61t5mCFne1L.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "sports-book4.html"
        },
        {
            title: "Born to Run",
            author: "Christopher McDougall",
            description: "The secrets of endurance running.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXdxN1DtORVHIXCtXVn9mLvOhzonhNKRovg&s",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "sports-book5.html"
        },
        {
            title: "Relentless",
            author: "Tim S. Grover",
            description: "How champions think and win.",
            image: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/relentless_from_good_to_great_to_unstoppable/2023_01_09_16_37_41_1-390x510.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "sports-book6.html"
        }
    ],
    fiction: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            description: "A journey of self-discovery.",
            image: "https://www.sloww.co/wp-content/uploads/2019/07/Sloww-The-Alchemist-Book-Paulo-Coelho.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "fiction-book1.html"
        },
        {
            title: "The Road",
            author: "Cormac McCarthy",
            description: "A father and son’s survival story.",
            image: "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "fiction-book2.html"
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            description: "An epic quest in Middle-earth.",
            image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "fiction-book3.html"
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            description: "A magical competition unfolds.",
            image: "https://m.media-amazon.com/images/I/71+whvJjE3L.jpg",
            badge: "Free",
            badgeClass: "badge-free",
            link: "fiction-book4.html"
        },
        {
            title: "Dune",
            author: "Frank Herbert",
            description: "A saga on a desert planet.",
            image: "https://bazaarvietnam.com/wp-content/uploads/2024/02/Harpers-Bazaar-Tac-pham-Dune-cua-nha-van-Frank-Herbert_08.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "fiction-book5.html"
        },
        {
            title: "Circe",
            author: "Madeline Miller",
            description: "A retelling of Greek mythology.",
            image: "https://cdn.waterstones.com/images/00125453-273x400.jpeg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "fiction-book6.html"
        }
    ],
    featured: [
        {
            title: "The Nature of Life",
            author: "E.O. Wilson",
            description: "An insightful exploration of the diversity of life on Earth, examining the interconnections between species, ecosystems, and humanity's role in preserving the natural world.",
            image: "https://cdn11.bigcommerce.com/s-hvyeu5c5mp/images/stencil/1280x1280/products/286/562/ADU-NL1__90162.1633990021.jpg?c=1",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "featuredBooks-book1.html"
        },
        {
            title: "Space Encyclopedia",
            author: "National Geographic Kids",
            description: "A captivating guide to the wonders of space, from stars and planets to black holes and galaxies. Perfect for curious minds eager to explore the cosmos!",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF3lLOKwzq5pB1DAXuvHovgmQAnQ7YD8CFQ&s",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "featuredBooks-book6.html"
        },
        {
            title: "Geometry Essentials",
            author: "Carolyn Wheater",
            description: "A comprehensive guide to geometry concepts, covering shapes, angles, theorems, and practical applications, designed for students and enthusiasts seeking a deeper understanding of the subject.",
            image: "https://m.media-amazon.com/images/I/51hZ-LLWMNL._AC_UF1000,1000_QL80_.jpg",
            badge: "Borrowed",
            badgeClass: "badge-borrowed",
            link: "featuredBooks-book6.html"
        } 
    ] 
    // You can add more genres here, like history, children, etc.
};


function generateBookCards(genre) {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Clear previous content

    // Check if the genre exists
    if (genres[genre]) {
        genres[genre].forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('col');

            // Safe handling of text content
            const safeTitle = book.title.replace(/'/g, "\\'");
            const safeAuthor = book.author.replace(/'/g, "\\'");
            const safeDescription = book.description.replace(/'/g, "\\'");

            bookCard.innerHTML = `
                <div class="card">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.description}</p>
                        ${book.badge && book.badgeClass ? `<span class="badge rounded-pill ${book.badgeClass}">${book.badge}</span>` : ''}
                        <button class="btn btn-primary mt-3" onclick="showBookDetails('${safeTitle}', '${safeAuthor}', '${safeDescription}', '${book.image}', '${book.badge}', '${book.badgeClass}')">View Details</button>
                    </div>
                </div>
            `;

            container.appendChild(bookCard);
        });
    } else {
        // If no books are found for the genre, show a fallback message
        container.innerHTML = '<p>No books found for this genre.</p>';
    }
}

function showBookDetails(title, author, description, image, badge, badgeClass) {
    // Get modal elements
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const modalBadge = document.getElementById('modalBadge');
    const cancelButton = document.getElementById('cancelButton');
    const modal = document.getElementById('bookModal');

    // Set content in the modal
    modalTitle.innerText = title;
    modalAuthor.innerText = `Author: ${author}`;
    modalDescription.innerText = description;
    modalImage.src = image;

    // Display the badge if available
    if (badge && badgeClass) {
        modalBadge.innerText = badge;
        modalBadge.className = `badge ${badgeClass}`; // Dynamically set the badge class
        modalBadge.style.display = 'inline-block';
    } else {
        modalBadge.style.display = 'none'; // Hide badge if not available
    }

    // Show the modal
    modal.style.display = 'flex';

    // Handle "Cancel" button
    cancelButton.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal on clicking "X"
    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function searchBook() {
    const searchBar = document.querySelector('.search-bar input'); // Get the search bar input
    const searchQuery = searchBar.value.toLowerCase().trim(); // Convert input to lowercase and trim whitespace
    let foundBook = null;

    // Loop through all genres and books
    for (const genre in genres) {
        genres[genre].forEach(book => {
            // Check if the search query matches the book title or author
            if (
                book.title.toLowerCase().includes(searchQuery) || 
                book.author.toLowerCase().includes(searchQuery)
            ) {
                foundBook = book; // Store the matched book
            }
        });
    }

    if (foundBook) {
        // Display the book details in the modal
        showBookDetails(foundBook.title, foundBook.author, foundBook.description, foundBook.image, foundBook.badge, foundBook.badgeClass);
    } else {
        alert('No matching book or author found!'); // Optional: Display an alert if no match is found
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-search').addEventListener('click', searchBook);
    document.querySelector('.search-bar input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            searchBook();
        }
    });
});