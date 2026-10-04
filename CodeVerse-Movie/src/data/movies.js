export const INITIAL_MOVIES = [
  {
    id: "m1",
    title: "Cyber Nexus 2099",
    tagline: "The line between human and code has bled away.",
    year: 2025,
    genre: ["Sci-Fi", "Action", "Cyberpunk"],
    rating: 8.9,
    voteCount: 14200,
    runtime: "2h 24m",
    ageRating: "PG-13",
    director: "Elena Rostova",
    writers: ["Marcus Vance", "Elena Rostova"],
    synopsis: "In a neon-drenched metropolis governed by neural networks, a renegade netrunner uncovers a suppressed AI protocol that threatens to overwrite human consciousness across the globe.",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ", // Replaceable with real trailer embed
    cast: [
      { name: "Kai Sterling", role: "Vax (Netrunner)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
      { name: "Aria Thorne", role: "Dr. Lyra Vance", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
      { name: "Kenji Sato", role: "Commander Thorne", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "Maya Lin", role: "Unit-X (AI Proxy)", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r1", user: "Alex Mercer", rating: 5, date: "2 days ago", comment: "Mind-bending visual masterpiece! The soundtrack alone gave me chills.", helpful: 42 },
      { id: "r2", user: "Sarah Jenkins", rating: 4, date: "1 week ago", comment: "Stunning cyberpunk world-building. Third act was intensely thrilling.", helpful: 18 }
    ],
    featured: true,
    trending: true,
    topRated: true
  },
  {
    id: "m2",
    title: "Interstellar Horizon",
    tagline: "Beyond the stars lies our ultimate truth.",
    year: 2024,
    genre: ["Sci-Fi", "Adventure", "Drama"],
    rating: 9.1,
    voteCount: 28500,
    runtime: "2h 45m",
    ageRating: "PG-13",
    director: "Christopher Hayes",
    writers: ["Christopher Hayes", "Jonathan Hayes"],
    synopsis: "When Earth's magnetosphere begins collapsing, an astronaut crew embarks on a perilous singularity transit to investigate a deep-space distress beacon emitting quantum harmonic signals.",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    youtubeId: "zSWdZVtXT7E",
    cast: [
      { name: "David Miller", role: "Captain Cooper", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80" },
      { name: "Sophia Chen", role: "Dr. Amelia Brand", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Michael Vance", role: "Jarvis AI", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r3", user: "CosmicGazer", rating: 5, date: "3 days ago", comment: "An emotional rollercoaster that will leave you staring at the night sky for hours.", helpful: 89 }
    ],
    featured: true,
    trending: true,
    topRated: true
  },
  {
    id: "m3",
    title: "Shadows of Eldoria",
    tagline: "Light dies first where magic was forgotten.",
    year: 2024,
    genre: ["Fantasy", "Action", "Adventure"],
    rating: 8.7,
    voteCount: 19400,
    runtime: "2h 18m",
    ageRating: "PG-13",
    director: "Astrid Lindgren",
    writers: ["Astrid Lindgren"],
    synopsis: "An outcast spellblade and a rogue alchemist form an uneasy pact to reclaim an ancient relic capable of severing the dark eclipse consuming their realm.",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    youtubeId: "YoHD9XEInc0",
    cast: [
      { name: "Eamon Drake", role: "Kaelen Soulblade", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" },
      { name: "Freya Frost", role: "Lyria Moonweaver", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r4", user: "FantasyFanatic", rating: 5, date: "5 days ago", comment: "The spell combat sequences are unmatched! A true epic fantasy masterpiece.", helpful: 31 }
    ],
    featured: true,
    trending: true,
    topRated: false
  },
  {
    id: "m4",
    title: "Velocity Shift: Tokyo Drift 2",
    tagline: "Speed is a religion. Burnouts are the sermon.",
    year: 2025,
    genre: ["Action", "Thriller", "Crime"],
    rating: 8.4,
    voteCount: 11200,
    runtime: "1h 58m",
    ageRating: "PG-13",
    director: "Kenzo Takahashi",
    writers: ["Taro Yamada", "Kenzo Takahashi"],
    synopsis: "Underground street racers in Shibuya face off against an elite syndicate utilizing automated hypercars in a high-stakes championship where losing means losing everything.",
    backdrop: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    youtubeId: "2GfBkC3i7-w",
    cast: [
      { name: "Ren Sato", role: "Takashi", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "Chloe Bennett", role: "Mia Vane", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r5", user: "NitroRider", rating: 4, date: "1 week ago", comment: "Adrenaline pumping from start to finish! Car sound effects are insane.", helpful: 15 }
    ],
    featured: false,
    trending: true,
    topRated: false
  },
  {
    id: "m5",
    title: "The Silent Detective",
    tagline: "Every crime leaves a noise. He only listens to the quiet.",
    year: 2023,
    genre: ["Crime", "Drama", "Mystery"],
    rating: 9.0,
    voteCount: 31000,
    runtime: "2h 10m",
    ageRating: "R",
    director: "Julian Vance",
    writers: ["Julian Vance"],
    synopsis: "A retired lip-reader and forensic investigator is drawn into a cold case involving a secretive syndicate operating inside high-society gala dinners across London.",
    backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    youtubeId: "EXeTwQWrcwY",
    cast: [
      { name: "Arthur Pendelton", role: "Inspector Thomas", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
      { name: "Victoria Cross", role: "Lady Genevieve", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r6", user: "MysteryBuff", rating: 5, date: "2 weeks ago", comment: "Flawless noir cinematography and a mind-boggling plot twist!", helpful: 67 }
    ],
    featured: false,
    trending: false,
    topRated: true
  },
  {
    id: "m6",
    title: "Neon Echoes: Rebirth",
    tagline: "Sound can destroy memories. Music can rewrite them.",
    year: 2025,
    genre: ["Animation", "Sci-Fi", "Music"],
    rating: 8.8,
    voteCount: 16800,
    runtime: "1h 45m",
    ageRating: "PG",
    director: "Sora Takahashi",
    writers: ["Sora Takahashi"],
    synopsis: "In a world where emotions are synthetically regulated, a young synthwave composer discovers illegal acoustic frequencies that restore human memories.",
    backdrop: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    youtubeId: "L_LUpnjgPso",
    cast: [
      { name: "Hana Kim", role: "Echo (Voice)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Leo Vance", role: "Orion", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r7", user: "AnimeLover99", rating: 5, date: "4 days ago", comment: "Visually breathtaking anime with an unforgettable soundtrack!", helpful: 54 }
    ],
    featured: false,
    trending: true,
    topRated: true
  },
  {
    id: "m7",
    title: "Chronos Protocol",
    tagline: "Yesterday is a battleground. Tomorrow is already lost.",
    year: 2024,
    genre: ["Sci-Fi", "Thriller", "Action"],
    rating: 8.5,
    voteCount: 22100,
    runtime: "2h 12m",
    ageRating: "PG-13",
    director: "Marcus Vance",
    writers: ["Marcus Vance"],
    synopsis: "A time-travel operative is trapped in a 60-minute recurring loop inside a falling space station while attempting to prevent an assassination that alters history.",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    youtubeId: "LdOM0x0XD55",
    cast: [
      { name: "Gabriel Thorne", role: "Agent Jack", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "Elena Rostova", role: "Commander Vane", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r8", user: "TimeTraveler", rating: 4, date: "3 weeks ago", comment: "Pacing is intense! Kept me guessing until the last minute.", helpful: 29 }
    ],
    featured: false,
    trending: false,
    topRated: false
  },
  {
    id: "m8",
    title: "Kingdom of Frost",
    tagline: "Winter remembers every crown.",
    year: 2023,
    genre: ["Fantasy", "Drama"],
    rating: 8.6,
    voteCount: 15400,
    runtime: "2h 30m",
    ageRating: "PG-13",
    director: "Helena Varga",
    writers: ["Helena Varga"],
    synopsis: "During a century-long blizzard, three rival noble houses battle for control of the geothermal forge beneath the world's northernmost fortress.",
    backdrop: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1600&q=80",
    poster: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    cast: [
      { name: "Bjorn Ironside", role: "King Alistair", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
      { name: "Sigrid Frost", role: "Princess Freya", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" }
    ],
    reviews: [
      { id: "r9", user: "NorthernWind", rating: 5, date: "1 month ago", comment: "Atmospheric, brutal, and emotionally poignant.", helpful: 40 }
    ],
    featured: false,
    trending: false,
    topRated: true
  }
];
