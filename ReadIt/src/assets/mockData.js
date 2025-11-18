const books = [
  {
    id: 1,
    title: "The Silent Observer",
    author: "Ava Richardson",
    publishDate: "2021-03-15",
    pages: 320,
    coverImage: "https://picsum.photos/200/300?random=1",
    description: "A gripping mystery novel about a detective who uncovers hidden truths in a quiet suburban town.",
    category: "Mystery",
    rating: 4.5
  },
  {
    id: 2,
    title: "Winds of Eternity",
    author: "Liam Carter",
    publishDate: "2019-07-10",
    pages: 412,
    coverImage: "https://picsum.photos/200/300?random=2",
    description: "An epic fantasy tale of courage, betrayal, and destiny set in a world ruled by ancient winds.",
    category: "Fantasy",
    rating: 4.7
  },
  {
    id: 3,
    title: "Digital Dawn",
    author: "Sophia Brooks",
    publishDate: "2022-01-20",
    pages: 285,
    coverImage: "https://picsum.photos/200/300?random=3",
    description: "A futuristic sci-fi story exploring the boundaries between artificial intelligence and humanity.",
    category: "Sci-Fi",
    rating: 4.6
  },
  {
    id: 4,
    title: "Beyond the Horizon",
    author: "Ethan Walker",
    publishDate: "2018-09-05",
    pages: 350,
    coverImage: "https://picsum.photos/200/300?random=4",
    description: "A heartwarming adventure of two explorers who seek a mythical land beyond the ocean.",
    category: "Adventure",
    rating: 4.3
  },
  {
    id: 5,
    title: "Shadows of the Past",
    author: "Isabella King",
    publishDate: "2020-11-25",
    pages: 298,
    coverImage: "https://picsum.photos/200/300?random=5",
    description: "A psychological thriller that delves into the haunting memories of a woman returning to her hometown.",
    category: "Thriller",
    rating: 4.4
  },
  {
    id: 6,
    title: "Code of Dreams",
    author: "Noah Peterson",
    publishDate: "2023-05-17",
    pages: 380,
    coverImage: "https://picsum.photos/200/300?random=6",
    description: "A tech-driven narrative about a young programmer who discovers the power to alter reality through code.",
    category: "Sci-Fi",
    rating: 4.8
  },
  {
    id: 7,
    title: "Whispers in the Library",
    author: "Olivia Bennett",
    publishDate: "2017-02-14",
    pages: 256,
    coverImage: "https://picsum.photos/200/300?random=7",
    description: "A cozy mystery set in an old library where each book hides a secret from the past.",
    category: "Mystery",
    rating: 4.2
  },
  {
    id: 8,
    title: "The Art of Stillness",
    author: "Henry Moore",
    publishDate: "2016-08-22",
    pages: 190,
    coverImage: "https://picsum.photos/200/300?random=8",
    description: "A reflective non-fiction book exploring mindfulness and the power of inner peace.",
    category: "Self-Help",
    rating: 4.1
  },
  {
    id: 9,
    title: "Fragments of Tomorrow",
    author: "Ella Turner",
    publishDate: "2024-02-12",
    pages: 410,
    coverImage: "https://picsum.photos/200/300?random=9",
    description: "A dystopian sci-fi novel where society rebuilds itself through fragmented digital memories.",
    category: "Sci-Fi",
    rating: 4.9
  },
  {
    id: 10,
    title: "Hidden Trails",
    author: "Lucas Reed",
    publishDate: "2015-12-05",
    pages: 275,
    coverImage: "https://picsum.photos/200/300?random=10",
    description: "A travel memoir capturing the unseen beauty of remote landscapes and cultures around the world.",
    category: "Non-Fiction",
    rating: 4.0
  },
  {
    id: 11,
    title: "Echoes of Time",
    author: "Maya Collins",
    publishDate: "2019-06-30",
    pages: 330,
    coverImage: "https://picsum.photos/200/300?random=11",
    description: "A time-travel adventure exploring the fine line between destiny and free will.",
    category: "Sci-Fi",
    rating: 4.6
  },
  {
    id: 12,
    title: "Canvas of Life",
    author: "Benjamin Clark",
    publishDate: "2021-10-19",
    pages: 260,
    coverImage: "https://picsum.photos/200/300?random=12",
    description: "An inspiring story of an artist who finds meaning in every brushstroke after personal loss.",
    category: "Fiction",
    rating: 4.3
  },
  {
    id: 13,
    title: "The Infinite Loop",
    author: "Harper Lewis",
    publishDate: "2020-04-09",
    pages: 295,
    coverImage: "https://picsum.photos/200/300?random=13",
    description: "A thrilling science fiction journey through virtual worlds where time never truly ends.",
    category: "Sci-Fi",
    rating: 4.7
  },
  {
    id: 14,
    title: "Beneath the Willow Tree",
    author: "Chloe Anderson",
    publishDate: "2018-03-03",
    pages: 340,
    coverImage: "https://picsum.photos/200/300?random=14",
    description: "A touching drama about family secrets, forgiveness, and the power of love across generations.",
    category: "Drama",
    rating: 4.4
  },
  {
    id: 15,
    title: "Midnight Over Manhattan",
    author: "Daniel Ross",
    publishDate: "2023-08-11",
    pages: 360,
    coverImage: "https://picsum.photos/200/300?random=15",
    description: "A fast-paced crime thriller set in the sleepless streets of New York City.",
    category: "Thriller",
    rating: 4.6
  },

  // ----------------------- NEW ONES -----------------------

  {
    id: 16,
    title: "The Forgotten Realm",
    author: "Ella Morgan",
    publishDate: "2020-02-18",
    pages: 410,
    coverImage: "https://picsum.photos/200/300?random=16",
    description: "A magical world lost in time, awaiting a chosen hero.",
    category: "Fantasy",
    rating: 4.5
  },
  {
    id: 17,
    title: "Silent Footsteps",
    author: "Mark Davidson",
    publishDate: "2017-11-09",
    pages: 290,
    coverImage: "https://picsum.photos/200/300?random=17",
    description: "A detective hunts a serial killer leaving cryptic patterns behind.",
    category: "Crime",
    rating: 4.3
  },
  {
    id: 18,
    title: "The Quantum Paradox",
    author: "Nora Phillips",
    publishDate: "2024-01-08",
    pages: 350,
    coverImage: "https://picsum.photos/200/300?random=18",
    description: "A scientist discovers a formula that bends the laws of physics.",
    category: "Sci-Fi",
    rating: 4.8
  },
  {
    id: 19,
    title: "Garden of Echoes",
    author: "Ivy Sanders",
    publishDate: "2022-06-14",
    pages: 260,
    coverImage: "https://picsum.photos/200/300?random=19",
    description: "A poetic journey through memories of love and loss.",
    category: "Romance",
    rating: 4.2
  },
  {
    id: 20,
    title: "Warriors of Dawn",
    author: "Adrian Hunt",
    publishDate: "2019-04-22",
    pages: 380,
    coverImage: "https://picsum.photos/200/300?random=20",
    description: "A group of fighters rise against tyranny in an ancient kingdom.",
    category: "Fantasy",
    rating: 4.7
  },
  {
    id: 21,
    title: "The Deep Blue Secret",
    author: "Clara Hayes",
    publishDate: "2018-09-20",
    pages: 300,
    coverImage: "https://picsum.photos/200/300?random=21",
    description: "An oceanic explorer uncovers a civilization beneath the waves.",
    category: "Adventure",
    rating: 4.3
  },
  {
    id: 22,
    title: "The Billionaire's Code",
    author: "Ryan Brooks",
    publishDate: "2021-12-02",
    pages: 330,
    coverImage: "https://picsum.photos/200/300?random=22",
    description: "A success guide written by one of the world's richest entrepreneurs.",
    category: "Self-Help",
    rating: 4.1
  },
  {
    id: 23,
    title: "Pages of Fire",
    author: "Natalie Woods",
    publishDate: "2016-05-30",
    pages: 310,
    coverImage: "https://picsum.photos/200/300?random=23",
    description: "A librarian discovers a book that can change the past.",
    category: "Fantasy",
    rating: 4.4
  },
  {
    id: 24,
    title: "Stormwatch",
    author: "Kevin Harris",
    publishDate: "2020-08-11",
    pages: 415,
    coverImage: "https://picsum.photos/200/300?random=24",
    description: "A hurricane chaser faces nature's fury and personal demons.",
    category: "Thriller",
    rating: 4.5
  },
  {
    id: 25,
    title: "Chronicles of Steel",
    author: "Victor Blake",
    publishDate: "2023-04-01",
    pages: 440,
    coverImage: "https://picsum.photos/200/300?random=25",
    description: "A cyber-enhanced hero must uncover a conspiracy threatening Earth.",
    category: "Sci-Fi",
    rating: 4.8
  },
  {
    id: 26,
    title: "Letters to Tomorrow",
    author: "Grace Wilson",
    publishDate: "2022-10-09",
    pages: 270,
    coverImage: "https://picsum.photos/200/300?random=26",
    description: "A heartfelt story told through letters written to the future.",
    category: "Drama",
    rating: 4.3
  },
  {
    id: 27,
    title: "The Hidden Manuscript",
    author: "Oliver Grant",
    publishDate: "2017-01-19",
    pages: 310,
    coverImage: "https://picsum.photos/200/300?random=27",
    description: "A cryptographer uncovers clues to a lost treasure.",
    category: "Mystery",
    rating: 4.2
  },
  {
    id: 28,
    title: "Rise of the Titans",
    author: "Aiden Walker",
    publishDate: "2018-04-11",
    pages: 460,
    coverImage: "https://picsum.photos/200/300?random=28",
    description: "Ancient gods return to reclaim the world.",
    category: "Fantasy",
    rating: 4.7
  },
  {
    id: 29,
    title: "Waves of Serenity",
    author: "Lila Thompson",
    publishDate: "2021-07-21",
    pages: 200,
    coverImage: "https://picsum.photos/200/300?random=29",
    description: "A calming guide to finding peace and balance in daily life.",
    category: "Self-Help",
    rating: 4.0
  },
  {
    id: 30,
    title: "Broken Chains",
    author: "Evan Knight",
    publishDate: "2019-03-17",
    pages: 350,
    coverImage: "https://picsum.photos/200/300?random=30",
    description: "An inspiring biography of a man who overcame impossible odds.",
    category: "Biography",
    rating: 4.5
  }
];

export default books;
