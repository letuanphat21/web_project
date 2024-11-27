// Array of book objects categorized by genre
const genres = {
    literature: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A classic novel about the American dream.",
            image: "../image/category/TheGreatGatsby.png",
            altImage: "image/category/TheGreatGatsby.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "book-detail.html"
        },
        {
            title: "1984",
            author: "George Orwell",
            description: "A dystopian novel about totalitarianism.",
            image: "../image/category/1984.png",
            altImage: "image/category/1984.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "book-detail.html"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "A romantic novel about class and love.",
            image: "../image/category/P&P.png",
            altImage: "image/category/P&P.png",
            badge: "",
            badgeClass: "",
            link: "book-detail.html"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A novel about racial injustice in the Deep South.",
            image: "../image/category/ToKillAMockingbird.png",
            altImage: "image/category/ToKillAMockingbird.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "book-detail.html"
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            description: "A story of teenage angst and alienation.",
            image: "../image/category/CatcherInTheRye.png",
            altImage: "image/category/CatcherInTheRye.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "book-detail.html"
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            description: "An epic tale of obsession and revenge at sea.",
            image: "../image/category/MobyDick.png",
            altImage: "image/category/MobyDick.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "book-detail.html"
        }
        
    ],
    science: [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            description: "Explores time, space, and black holes.",
            image: "../image/category/brief-history-of-time.png",
            altImage: "image/category/brief-history-of-time.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "science-book1.html"
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            description: "Focuses on evolution and genes.",
            image: "../image/category/selfish-gene.png",
            altImage: "image/category/selfish-gene.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "science-book2.html"
        },
        {
            title: "Cosmos",
            author: "Carl Sagan",
            description: "A journey through the universe.",
            image: "../image/category/cosmos.png",
            altImage: "image/category/cosmos.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "science-book3.html"
        },
        {
            title: "The Immortal Life of Henrietta Lacks",
            author: "Rebecca Skloot",
            description: "The story behind HeLa cells.",
            image: "../image/category/henrietta-lacks.png",
            altImage: "image/category/henrietta-lacks.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "science-book4.html"
        },
        {
            title: "The Universe in a Nutshell",
            author: "Stephen Hawking",
            description: "An intro to modern physics.",
            image: "../image/category/universe.png",
            altImage: "image/category/universe.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "science-book5.html"
        },
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            description: "Covers time and space concepts.",
            image: "../image/category/history-of-time.png",
            altImage: "image/category/history-of-time.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "science-book6.html"
        }
    ],
    history: [
        {
            title: "A Brief History of Humankind",
            author: "Yuval Noah Harari",
            description: "Explores the history of humanity.",
            image: "../image/category/sapiens.png",
            altImage: "image/category/sapiens.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "history-book1.html"
        },
        {
            title: "The Silk Roads",
            author: "Peter Frankopan",
            description: "Reveals the impact of trade routes.",
            image: "../image/category/silk-roads.png",
            altImage: "image/category/silk-roads.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "history-book2.html"
        },
        {
            title: "Guns, Germs, and Steel",
            author: "Jared Diamond",
            description: "Analyzes the rise of civilizations.",
            image: "../image/category/guns-germs-steel.png",
            altImage: "image/category/guns-germs-steel.png",
            badge: "",
            badgeClass: "badge-classic",
            link: "history-book3.html"
        },
        {
            title: "The Wright Brothers",
            author: "David McCullough",
            description: "Chronicles aviation pioneers.",
            image: "../image/category/wright-brothers.png",
            altImage: "image/category/wright-brothers.png",
            badge: "",
            badgeClass: "badge-recommended",
            link: "history-book4.html"
        },
        {
            title: "A People's History",
            author: "Howard Zinn",
            description: "A new perspective on U.S. history.",
            image: "../image/category/peoples-history.png",
            altImage: "image/category/peoples-history.png",
            badge: "",
            badgeClass: "badge-new",
            link: "history-book5.html"
        },
        {
            title: "The Diary Of A Young Girl",
            author: "Anne Frank",
            description: "The story of Anne Frank's life.",
            image: "../image/category/diary-anne-frank.png",
            altImage: "image/category/diary-anne-frank.png",
            badge: "",
            badgeClass: "badge-new",
            link: "history-book6.html"
        }        
    ],
    children: [
        {
            title: "The Very Hungry Caterpillar",
            author: "Eric Carle",
            description: "A caterpillar eats his way to becoming a butterfly.",
            image: "../image/category/very-hungry-caterpillar.png",
            altImage: "image/category/very-hungry-caterpillar.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "children-book1.html"
        },
        {
            title: "Where the Wild Things Are",
            author: "Maurice Sendak",
            description: "A boy's journey to a land of wild creatures.",
            image: "../image/category/wild-things.png",
            altImage: "image/category/wild-things.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "children-book2.html"
        },
        {
            title: "Goodnight Moon",
            author: "Margaret Wise Brown",
            description: "A soothing bedtime ritual in a cozy room.",
            image: "../image/category/goodnight-moon.png",
            altImage: "image/category/goodnight-moon.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "children-book3.html"
        },
        {
            title: "Corduroy",
            author: "Don Freeman",
            description: "A teddy bear's adventure to find a lost button.",
            image: "../image/category/corduroy.png",
            altImage: "image/category/corduroy.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "children-book4.html"
        },
        {
            title: "The Snowy Day",
            author: "Ezra Jack Keats",
            description: "A boy explores the magic of fresh snow.",
            image: "../image/category/snowy-day.png",
            altImage: "image/category/snowy-day.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "children-book5.html"
        },
        {
            title: "Giraffes Can't Dance",
            author: "Giles Andreae",
            description: "A giraffe finds his own rhythm.",
            image: "../image/category/giraffes-cant-dance.png",
            altImage: "image/category/giraffes-cant-dance.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "children-book7.html"
        }        
    ],
    mentality: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            description: "How tiny changes lead to remarkable results.",
            image: "../image/category/atomic-habits.png",
            altImage: "image/category/atomic-habits.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "mentality-book1.html"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "A guide to living in the present moment.",
            image: "../image/category/power-of-now.png",
            altImage: "image/category/power-of-now.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "mentality-book2.html"
        },
        {
            title: "Mindset",
            author: "Carol S. Dweck",
            description: "Difference between fixed and growth mindsets.",
            image: "../image/category/mindset.png",
            altImage: "image/category/mindset.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "mentality-book3.html"
        },
        {
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            description: "A counterintuitive approach to living a good life.",
            image: "../image/category/subtle-art.png",
            altImage: "image/category/subtle-art.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "mentality-book4.html"
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "The two systems that drive human thought.",
            image: "../image/category/thinking-fast-slow.png",
            altImage: "image/category/thinking-fast-slow.png",
            badge: "Insightful",
            badgeClass: "badge-insightful",
            link: "mentality-book5.html"
        },
        {
            title: "Man's Search for Meaning",
            author: "Viktor E. Frankl",
            description: "Journey through finding purpose in adversity.",
            image: "../image/category/mans-search.png",
            altImage: "image/category/mans-search.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "mentality-book6.html"
        }
    ],
    economy: [
        {
            title: "Capital in the Twenty-First Century",
            author: "Thomas Piketty",
            description: "Dive into wealth inequality and economic history.",
            image: "../image/category/capital-21st-century.png",
            altImage: "image/category/capital-21st-century.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "economy-book1.html"
        },
        {
            title: "The Wealth of Nations",
            author: "Adam Smith",
            description: "The foundational text of modern economics.",
            image: "../image/category/wealth-of-nations.png",
            altImage: "image/category/wealth-of-nations.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "economy-book2.html"
        },
        {
            title: "Freakonomics",
            author: "Steven D. Levitt & Stephen J. Dubner",
            description: "Hidden incentives behind everyday choices.",
            image: "../image/category/freakonomics.png",
            altImage: "image/category/freakonomics.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "economy-book3.html"
        },
        {
            title: "The Big Short",
            author: "Michael Lewis",
            description: "A gripping account of the 2008 financial crisis.",
            image: "../image/category/big-short.png",
            altImage: "image/category/big-short.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "economy-book4.html"
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            description: "Lessons on wealth and financial freedom.",
            image: "../image/category/rich-dad-poor-dad.png",
            altImage: "image/category/rich-dad-poor-dad.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "economy-book7.html"
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "Explains economic decision-making.",
            image: "../image/category/thinking-fast-slow.png",
            altImage: "image/category/thinking-fast-slow.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "economy-book8.html"
        }        
    ],    
    lifeSkills: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            description: "Build good habits and break bad ones.",
            image: "../image/category/atomic-habits.png",
            altImage: "image/category/atomic-habits.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "life-skills-book1.html"
        },
        {
            title: "The 7 Habits",
            author: "Stephen R. Covey",
            description: "Keys to personal and professional growth.",
            image: "../image/category/7-habits.png",
            altImage: "image/category/7-habits.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "life-skills-book2.html"
        },
        {
            title: "How to Win Friends",
            author: "Dale Carnegie",
            description: "Improve relationships and influence others.",
            image: "../image/category/how-to-win-friends.png",
            altImage: "image/category/how-to-win-friends.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "life-skills-book3.html"
        },
        {
            title: "Mindset",
            author: "Carol S. Dweck",
            description: "The power of a growth mindset.",
            image: "../image/category/mindset.png",
            altImage: "image/category/mindset.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "life-skills-book4.html"
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            description: "Focus better in a distracted world.",
            image: "../image/category/deep-work.png",
            altImage: "image/category/deep-work.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "life-skills-book5.html"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "Live fully in the present moment.",
            image: "../image/category/power-of-now.png",
            altImage: "image/category/power-of-now.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "life-skills-book6.html"
        }
    ],
    sports: [
        {
            title: "Open",
            author: "Andre Agassi",
            description: "A revealing tennis memoir.",
            image: "../image/category/open.png",
            altImage: "image/category/open.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "sports-book1.html"
        },
        {
            title: "Shoe Dog",
            author: "Phil Knight",
            description: "The story of Nike's rise.",
            image: "../image/category/shoe-dog.png",
            altImage: "image/category/shoe-dog.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "sports-book2.html"
        },
        {
            title: "The Mamba Mentality",
            author: "Kobe Bryant",
            description: "Insights from a basketball legend.",
            image: "../image/category/mamba-mentality.png",
            altImage: "image/category/mamba-mentality.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "sports-book3.html"
        },
        {
            title: "Moneyball",
            author: "Michael Lewis",
            description: "How data revolutionized baseball.",
            image: "../image/category/moneyball.png",
            altImage: "image/category/moneyball.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "sports-book4.html"
        },
        {
            title: "Born to Run",
            author: "Christopher McDougall",
            description: "The secrets of endurance running.",
            image: "../image/category/born-to-run.png",
            altImage: "image/category/born-to-run.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "sports-book5.html"
        },
        {
            title: "Relentless",
            author: "Tim S. Grover",
            description: "How champions think and win.",
            image: "../image/category/relentless.png",
            altImage: "image/category/relentless.png",
            badge: "New",
            badgeClass: "badge-new",
            link: "sports-book6.html"
        }
    ],
    fiction: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            description: "A journey of self-discovery.",
            image: "../image/category/the-alchemist.png",
            altImage: "image/category/the-alchemist.png",
            badge: "Best Seller",
            badgeClass: "badge-best-seller",
            link: "fiction-book1.html"
        },
        {
            title: "The Road",
            author: "Cormac McCarthy",
            description: "A father and son’s survival story.",
            image: "../image/category/the-road.png",
            altImage: "image/category/the-road.png",
            badge: "Award-Winning",
            badgeClass: "badge-award-winning",
            link: "fiction-book2.html"
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            description: "An epic quest in Middle-earth.",
            image: "../image/category/the-hobbit.png",
            altImage: "image/category/the-hobbit.png",
            badge: "Classic",
            badgeClass: "badge-classic",
            link: "fiction-book3.html"
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            description: "A magical competition unfolds.",
            image: "../image/category/the-night-circus.png",
            altImage: "image/category/the-night-circus.png",
            badge: "Recommended",
            badgeClass: "badge-recommended",
            link: "fiction-book4.html"
        },
        {
            title: "Dune",
            author: "Frank Herbert",
            description: "A saga on a desert planet.",
            image: "../image/category/dune.png",
            altImage: "image/category/dune.png",
            badge: "Popular",
            badgeClass: "badge-popular",
            link: "fiction-book5.html"
        },
        {
            title: "Circe",
            author: "Madeline Miller",
            description: "A retelling of Greek mythology.",
            image: "../image/category/circle.png",
            altImage: "image/category/circle.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "fiction-book6.html"
        }
    ],
    featured: [
        {
            title: "The Nature of Life",
            author: "E.O. Wilson",
            description: "An insightful exploration of the diversity of life on Earth, examining the interconnections between species, ecosystems, and humanity's role in preserving the natural world.",
            image: "../image/category/nature.png",
            altImage: "image/category/nature.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
            link: "featuredBooks-book1.html"
        },
        {
            title: "Space Encyclopedia",
            author: "National Geographic Kids",
            description: "A captivating guide to the wonders of space, from stars and planets to black holes and galaxies. Perfect for curious minds eager to explore the cosmos!",
            image: "../image/category/space.png",
            altImage: "image/category/space.png",
            badge: "",
            badgeClass: "badge-recommended",
            link: "featuredBooks-book6.html"
        },
        {
            title: "Geometry Essentials",
            author: "Carolyn Wheater",
            description: "A comprehensive guide to geometry concepts, covering shapes, angles, theorems, and practical applications, designed for students and enthusiasts seeking a deeper understanding of the subject.",
            image: "../image/category/geometry.png",
            altImage: "image/category/geometry.png",
            badge: "Inspirational",
            badgeClass: "badge-inspirational",
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
                        <button class="btn btn-primary mt-3" onclick="showBookDetails('${safeTitle}', '${safeAuthor}', '${safeDescription}', '${book.image}', '${book.altImage}')">View Details</button>
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

function showBookDetails(title, author, description, image, altImage) {
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const modalAltImage = document.getElementById('modalAltImage');
    const cancelButton = document.getElementById('cancelButton');
    const addToCartButton = document.getElementById('addToCartButton');
    const modal = document.getElementById('bookModal');

    if (modalTitle && modalAuthor && modalDescription && modalImage && modalAltImage) {
        modalTitle.innerText = title;
        modalAuthor.innerText = `Author: ${author}`;
        modalDescription.innerText = description;
        modalImage.src = image;
        modalAltImage.src = altImage || image;

        // Show the modal
        modal.style.display = 'flex';

        // Close modal when "Cancel" button is clicked
        cancelButton.onclick = function () {
            modal.style.display = 'none';
        };

        // Handle "Add to Cart" button
        addToCartButton.onclick = function () {
            alert(`${title} has been added to your cart!`);
        };

        // Close modal on "X" button click
        document.querySelector('.close').onclick = function () {
            modal.style.display = 'none';
        };

        // Close modal when clicking outside modal content
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    } else {
        console.error('One or more modal elements are missing from the DOM.');
    }
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
        showBookDetails(foundBook.title, foundBook.author, foundBook.description, foundBook.image, foundBook.altImage);
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