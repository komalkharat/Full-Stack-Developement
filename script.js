const projects = [
  {
    name: "Student Portfolio Website",
    description: "A personal portfolio website showcasing student projects, skills, and achievements.",
    image: "assets/01-student-portfolio-website.png",
    live: "01 Student Portfolio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/01%20Student%20Portfolio%20Website"
  },
  {
    name: "Personal Blog Platform",
    description: "A clean personal blog platform with post listing, categories, and reading layout.",
    image: "assets/02-personal-blog-platform.png",
    live: "02 Personal Blog Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/02%20Personal%20Blog%20Platform"
  },
  {
    name: "Online Notes Manager",
    description: "A web-based notes manager to create, edit, and organize personal notes.",
    image: "assets/03-online-notes-manager.png",
    live: "03 Online Notes Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/03%20Online%20Notes%20Manager"
  },
  {
    name: "ToDo App with Login",
    description: "A to-do list app with user login, task management, and priority sorting.",
    image: "assets/04-todo-app-with-login.png",
    live: "04 ToDo App with Login/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/04%20ToDo%20App%20with%20Login"
  },
  {
    name: "Contact Management System",
    description: "A system to add, search, edit, and delete contacts with a clean UI.",
    image: "assets/05-contact-management-system.png",
    live: "05 Contact Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/05%20Contact%20Management%20System"
  },
  {
    name: "Event Registration Website",
    description: "An event registration site with form submission, seat selection, and confirmation.",
    image: "assets/06-event-registration-website.png",
    live: "06 Event Registration Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/06%20Event%20Registration%20Website"
  },
  {
    name: "Simple Ecommerce Store",
    description: "A basic e-commerce store with product listing, cart, and checkout UI.",
    image: "assets/07-simple-ecommerce-store.png",
    live: "07 Simple Ecommerce Store/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/07%20Simple%20Ecommerce%20Store"
  },
  {
    name: "Feedback Collection System",
    description: "A feedback form system with ratings, comments, and submission tracking.",
    image: "assets/08-feedback-collection-system.png",
    live: "08 Feedback Collection System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/08%20Feedback%20Collection%20System"
  },
  {
    name: "Online Quiz Application",
    description: "An interactive quiz app with timer, scoring, and result display.",
    image: "assets/09-online-quiz-application.png",
    live: "09 Online Quiz Application/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/09%20Online%20Quiz%20Application"
  },
  {
    name: "URL Shortener",
    description: "A URL shortener tool that generates short links and tracks click counts.",
    image: "assets/10-url-shortener.png",
    live: "10 URL Shortener/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/10%20URL%20Shortener"
  },
  {
    name: "Weather Forecast App",
    description: "A weather app showing current conditions and weekly forecast by city.",
    image: "assets/11-weather-forecast-app.png",
    live: "11 Weather Forecast App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/11%20Weather%20Forecast%20App"
  },
  {
    name: "Expense Tracker",
    description: "Track daily expenses with categories, totals, and a visual spending summary.",
    image: "assets/12-expense-tracker.png",
    live: "12 Expense Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/12%20Expense%20Tracker"
  },
  {
    name: "Online Book Library",
    description: "A digital library to browse, search, and read books by genre and author.",
    image: "assets/13-online-book-library.png",
    live: "13 Online Book Library/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/13%20Online%20Book%20Library"
  },
  {
    name: "Job Application Portal",
    description: "A job portal where users can browse listings and submit applications online.",
    image: "assets/14-job-application-portal.png",
    live: "14 Job Application Portal/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/14%20Job%20Application%20Portal"
  },
  {
    name: "Restaurant Menu Website",
    description: "A restaurant website with categorized menu, item details, and order UI.",
    image: "assets/15-restaurant-menu-website.png",
    live: "15 Restaurant Menu Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/15%20Restaurant%20Menu%20Website"
  },
  {
    name: "Online Voting System",
    description: "A secure online voting system with candidate listing and live vote counts.",
    image: "assets/16-online-voting-system.png",
    live: "16 Online Voting System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/16%20Online%20Voting%20System"
  },
  {
    name: "Digital Diary App",
    description: "A private digital diary to write, save, and revisit daily journal entries.",
    image: "assets/17-digital-diary-app.png",
    live: "17 Digital Diary App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/17%20Digital%20Diary%20App"
  },
  {
    name: "Online Complaint System",
    description: "A complaint submission and tracking system with status updates and categories.",
    image: "assets/18-online-complaint-system.png",
    live: "18 Online Complaint System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/18%20Online%20Complaint%20System"
  },
  {
    name: "Password Manager",
    description: "A local password manager to securely store and retrieve credentials.",
    image: "assets/19-password-manager.png",
    live: "19 Password Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/19%20Password%20Manager"
  },
  {
    name: "Newsletter Subscription System",
    description: "A newsletter signup system with email collection and subscription confirmation.",
    image: "assets/20-newsletter-subscription-system.png",
    live: "20 Newsletter Subscription System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/20%20Newsletter%20Subscription%20System"
  },
  {
    name: "Course Enrollment Website",
    description: "An online course enrollment platform with course listing and registration forms.",
    image: "assets/21-course-enrollment-website.png",
    live: "21 Course Enrollment Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/21%20Course%20Enrollment%20Website"
  },
  {
    name: "Online Polling App",
    description: "A polling application to create polls, vote, and view real-time results.",
    image: "assets/22-online-polling-app.png",
    live: "22 Online Polling App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/22%20Online%20Polling%20App"
  },
  {
    name: "Resume Builder Website",
    description: "A resume builder with live preview, templates, and downloadable output.",
    image: "assets/23-resume-builder-website.png",
    live: "23 Resume Builder Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/23%20Resume%20Builder%20Website"
  },
  {
    name: "Product Review Platform",
    description: "A product review site with ratings, user reviews, and category filtering.",
    image: "assets/24-product-review-platform.png",
    live: "24 Product Review Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/24%20Product%20Review%20Platform"
  },
  {
    name: "Image Gallery System",
    description: "A responsive image gallery with lightbox, filters, and grid layout.",
    image: "assets/25-image-gallery-system.png",
    live: "25 Image Gallery System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/25%20Image%20Gallery%20System"
  },
  {
    name: "Online Appointment Booking",
    description: "An appointment booking system with date/time slots and confirmation emails.",
    image: "assets/26-online-appointment-booking.png",
    live: "26 Online Appointment Booking/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/26%20Online%20Appointment%20Booking"
  },
  {
    name: "Task Management Tool",
    description: "A task management tool with priority labels, deadlines, and progress tracking.",
    image: "assets/28-task-management-tool.png",
    live: "28 Task Management Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/28%20Task%20Management%20Tool"
  },
  {
    name: "Attendance Management System",
    description: "An attendance tracker for students or employees with daily records and reports.",
    image: "assets/29-attendance-management-system.png",
    live: "29 Attendance Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/29%20Attendance%20Management%20System"
  },
  {
    name: "Online Feedback Analyzer",
    description: "A feedback analyzer that collects responses and visualizes sentiment and trends.",
    image: "assets/30-online-feedback-analyzer.png",
    live: "30 Online Feedback Analyzer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/30%20Online%20Feedback%20Analyzer"
  },
  {
    name: "Personal Finance Tracker",
    description: "A finance tracker to monitor income, expenses, savings, and budget goals.",
    image: "assets/31-personal-finance-tracker.png",
    live: "31 Personal Finance Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/31%20Personal%20Finance%20Tracker"
  },
  {
    name: "Online FAQ System",
    description: "An FAQ management system with searchable questions and collapsible answers.",
    image: "assets/32-online-faq-system.png",
    live: "32 Online FAQ System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/32%20Online%20FAQ%20System"
  },
  {
    name: "Digital Certificate Generator",
    description: "A certificate generator that creates custom downloadable certificates with user details.",
    image: "assets/33-digital-certificate-generator.png",
    live: "33 Digital Certificate Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/33%20Digital%20Certificate%20Generator"
  },
  {
    name: "Online File Upload System",
    description: "A file upload interface with drag-and-drop support and file type validation.",
    image: "assets/34-online-file-upload-system.png",
    live: "34 Online File Upload System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/34%20Online%20File%20Upload%20System"
  },
  {
    name: "Static Blog with CMS",
    description: "A static blog with a content management interface for posts and categories.",
    image: "assets/35-static-blog-with-cms.png",
    live: "35 Static Blog with CMS/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/35%20Static%20Blog%20with%20CMS"
  },
  {
    name: "Student Result Management",
    description: "A result management system to enter, view, and export student marks and grades.",
    image: "assets/36-student-result-management.png",
    live: "36 Student Result Management/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/36%20Student%20Result%20Management"
  },
  {
    name: "Online Survey Platform",
    description: "A survey builder and response collector with charts and summary statistics.",
    image: "assets/37-online-survey-platform.png",
    live: "37 Online Survey Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/37%20Online%20Survey%20Platform"
  },
  {
    name: "Blood Donation System",
    description: "A blood donation portal to register donors, search blood groups, and request blood.",
    image: "assets/38-blood-donation-system.png",
    live: "38 Blood Donation System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/38%20Blood%20Donation%20System"
  },
  {
    name: "College Club Management",
    description: "A college club management site with member registration, events, and announcements.",
    image: "assets/39-college-club-management.png",
    live: "39 College Club Management/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/39%20College%20Club%20Management"
  },
  {
    name: "Online Learning Resource Hub",
    description: "A resource hub with curated learning materials, videos, and topic-based filtering.",
    image: "assets/40-online-learning-resource-hub.png",
    live: "40 Online Learning Resource Hub/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/40%20Online%20Learning%20Resource%20Hub"
  },
  {
    name: "Online Address Book",
    description: "A digital address book to save and search contact details with map links.",
    image: "assets/41-online-address-book.png",
    live: "41 Online Address Book/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/41%20Online%20Address%20Book"
  },
  {
    name: "Daily Planner App",
    description: "A daily planner to schedule tasks, set reminders, and track productivity.",
    image: "assets/42-daily-planner-app.png",
    live: "42 Daily Planner App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/42%20Daily%20Planner%20App"
  },
  {
    name: "Online Discussion Forum",
    description: "A discussion forum with threads, replies, upvotes, and topic-based categories.",
    image: "assets/43-online-discussion-forum.png",
    live: "43 Online Discussion Forum/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/43%20Online%20Discussion%20Forum"
  },
  {
    name: "Online Voting Poll Dashboard",
    description: "A voting poll dashboard with live results, charts, and multiple poll management.",
    image: "assets/45-online-voting-poll-dashboard.png",
    live: "45 Online Voting Poll Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/45%20Online%20Voting%20Poll%20Dashboard"
  },
  {
    name: "Online Event Countdown App",
    description: "A countdown timer app for upcoming events with animated clock display.",
    image: "assets/46-online-event-countdown-app.png",
    live: "46 Online Event Countdown App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/46%20Online%20Event%20Countdown%20App"
  },
  {
    name: "Digital Clock Alarm System",
    description: "A digital clock with alarm setting, snooze, and multiple time zone support.",
    image: "assets/47-digital-clock-alarm-system.png",
    live: "47 Digital Clock Alarm System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/47%20Digital%20Clock%20Alarm%20System"
  },
  {
    name: "Online Image Compressor",
    description: "A browser-based image compressor to reduce file size while maintaining quality.",
    image: "assets/48-online-image-compressor.png",
    live: "48 Online Image Compressor/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/48%20Online%20Image%20Compressor"
  },
  {
    name: "Online PDF Merger Tool",
    description: "A tool to upload, arrange, and merge multiple PDF files into one document.",
    image: "assets/49-online-pdf-merger-tool.png",
    live: "49 Online PDF Merger Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/49%20Online%20PDF%20Merger%20Tool"
  },
  {
    name: "Static Company Website Admin",
    description: "A static company website with admin panel UI for content and team management.",
    image: "assets/50-static-company-website-admin.png",
    live: "50 Static Company Website Admin/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/50%20Static%20Company%20Website%20Admin"
  },
  {
    name: "Student Grade Calculator",
    description: "A grade calculator that computes GPA and letter grades from entered marks.",
    image: "assets/51-student-grade-calculator.png",
    live: "51 Student Grade Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/51%20Student%20Grade%20Calculator"
  },
  {
    name: "Online Poll System",
    description: "A polling system to create, share, and track votes on any topic.",
    image: "assets/52-online-poll-system.png",
    live: "52 Online Poll System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/52%20Online%20Poll%20System"
  },
  {
    name: "Recipe Sharing Platform",
    description: "A recipe platform to post, search, and save favorite recipes by cuisine.",
    image: "assets/53-recipe-sharing-platform.png",
    live: "53 Recipe Sharing Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/53%20Recipe%20Sharing%20Platform"
  },
  {
    name: "Personal Finance Dashboard",
    description: "A finance dashboard with income, expense charts, and savings goal tracking.",
    image: "assets/54-personal-finance-dashboard.png",
    live: "54 Personal Finance Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/54%20Personal%20Finance%20Dashboard"
  },
  {
    name: "Chat Application UI",
    description: "A modern chat UI with message bubbles, emoji support, and contact sidebar.",
    image: "assets/55-chat-application-ui.png",
    live: "55 Chat Application UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/55%20Chat%20Application%20UI"
  },
  {
    name: "Movie Review Website",
    description: "A movie review site with ratings, user comments, and genre-based browsing.",
    image: "assets/56-movie-review-website.png",
    live: "56 Movie Review Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/56%20Movie%20Review%20Website"
  },
  {
    name: "Music Playlist Manager",
    description: "A music playlist manager to create, edit, and play organized song collections.",
    image: "assets/57-music-playlist-manager.png",
    live: "57 Music Playlist Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/57%20Music%20Playlist%20Manager"
  },
  {
    name: "Portfolio Gallery",
    description: "A visual portfolio gallery with filterable categories and lightbox previews.",
    image: "assets/58-portfolio-gallery.png",
    live: "58 Portfolio Gallery/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/58%20Portfolio%20Gallery"
  },
  {
    name: "Typing Speed Test",
    description: "A typing speed test with WPM counter, accuracy tracking, and difficulty levels.",
    image: "assets/59-typing-speed-test.png",
    live: "59 Typing Speed Test/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/59%20Typing%20Speed%20Test"
  },
  {
    name: "Currency Converter",
    description: "A real-time currency converter supporting multiple international currencies.",
    image: "assets/60-currency-converter.png",
    live: "60 Currency Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/60%20Currency%20Converter"
  },
  {
    name: "BMI Calculator",
    description: "A BMI calculator with health category display and weight recommendation tips.",
    image: "assets/61-bmi-calculator.png",
    live: "61 BMI Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/61%20BMI%20Calculator"
  },
  {
    name: "Countdown Timer App",
    description: "A customizable countdown timer with start, pause, reset, and alert features.",
    image: "assets/62-countdown-timer-app.png",
    live: "62 Countdown Timer App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/62%20Countdown%20Timer%20App"
  },
  {
    name: "Random Quote Generator",
    description: "A quote generator that displays random motivational quotes with share options.",
    image: "assets/63-random-quote-generator.png",
    live: "63 Random Quote Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/63%20Random%20Quote%20Generator"
  },
  {
    name: "Color Palette Generator",
    description: "A color palette generator to create, copy, and export beautiful color schemes.",
    image: "assets/64-color-palette-generator.png",
    live: "64 Color Palette Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/64%20Color%20Palette%20Generator"
  },
  {
    name: "Memory Card Game",
    description: "A flip-and-match memory card game with difficulty levels and move counter.",
    image: "assets/65-memory-card-game.png",
    live: "65 Memory Card Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/65%20Memory%20Card%20Game"
  },
  {
    name: "Tic Tac Toe Game",
    description: "A two-player Tic Tac Toe game with win detection and score tracking.",
    image: "assets/66-tic-tac-toe-game.png",
    live: "66 Tic Tac Toe Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/66%20Tic%20Tac%20Toe%20Game"
  },
  {
    name: "Snake Game",
    description: "A classic Snake game with score tracking, speed levels, and game-over screen.",
    image: "assets/67-snake-game.png",
    live: "67 Snake Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/67%20Snake%20Game"
  },
  {
    name: "Sudoku Puzzle",
    description: "A Sudoku game with auto-generation, validation, hints, and difficulty settings.",
    image: "assets/68-sudoku-puzzle.png",
    live: "68 Sudoku Puzzle/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/68%20Sudoku%20Puzzle"
  },
  {
    name: "Chess Board UI",
    description: "An interactive chess board UI with piece movement rules and turn management.",
    image: "assets/69-chess-board-ui.png",
    live: "69 Chess Board UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/69%20Chess%20Board%20UI"
  },
  {
    name: "Word Counter Tool",
    description: "A word and character counter tool with reading time estimate and keyword density.",
    image: "assets/70-word-counter-tool.png",
    live: "70 Word Counter Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/70%20Word%20Counter%20Tool"
  },
  {
    name: "Online Resume Builder",
    description: "An online resume builder with live preview, section editing, and PDF export.",
    image: "assets/71-online-resume-builder.png",
    live: "71 Online Resume Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/71%20Online%20Resume%20Builder"
  },
  {
    name: "Travel Blog Website",
    description: "A travel blog with destination posts, photo galleries, and trip guides.",
    image: "assets/72-travel-blog-website.png",
    live: "72 Travel Blog Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/72%20Travel%20Blog%20Website"
  },
  {
    name: "Fitness Tracker App",
    description: "A fitness tracker to log workouts, track calories, and view progress charts.",
    image: "assets/73-fitness-tracker-app.png",
    live: "73 Fitness Tracker App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/73%20Fitness%20Tracker%20App"
  },
  {
    name: "Habit Tracker",
    description: "A daily habit tracker with streaks, completion checkmarks, and weekly overview.",
    image: "assets/74-habit-tracker.png",
    live: "74 Habit Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/74%20Habit%20Tracker"
  },
  {
    name: "Meditation Timer",
    description: "A meditation timer with ambient sounds, session logging, and breathing guide.",
    image: "assets/75-meditation-timer.png",
    live: "75 Meditation Timer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/75%20Meditation%20Timer"
  },
  {
    name: "Language Flashcard App",
    description: "A language learning flashcard app with flip animation, scoring, and deck management.",
    image: "assets/76-language-flashcard-app.png",
    live: "76 Language Flashcard App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/76%20Language%20Flashcard%20App"
  },
  {
    name: "Code Snippet Manager",
    description: "A code snippet manager with syntax highlighting, tags, and copy-to-clipboard.",
    image: "assets/77-code-snippet-manager.png",
    live: "77 Code Snippet Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/77%20Code%20Snippet%20Manager"
  },
  {
    name: "Markdown Editor",
    description: "A live markdown editor with split-screen preview and formatting toolbar.",
    image: "assets/78-markdown-editor.png",
    live: "78 Markdown Editor/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/78%20Markdown%20Editor"
  },
  {
    name: "JSON Formatter Tool",
    description: "A JSON formatter and validator with syntax highlighting and error detection.",
    image: "assets/79-json-formatter-tool.png",
    live: "79 JSON Formatter Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/79%20JSON%20Formatter%20Tool"
  },
  {
    name: "QR Code Generator",
    description: "A QR code generator that converts text or URLs into downloadable QR images.",
    image: "assets/80-qr-code-generator.png",
    live: "80 QR Code Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/80%20QR%20Code%20Generator"
  },
  {
    name: "Image Slider Component",
    description: "A responsive image slider with autoplay, navigation arrows, and dot indicators.",
    image: "assets/81-image-slider-component.png",
    live: "81 Image Slider Component/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/81%20Image%20Slider%20Component"
  },
  {
    name: "Drag and Drop List",
    description: "A drag-and-drop sortable list with reorder, delete, and save functionality.",
    image: "assets/82-drag-and-drop-list.png",
    live: "82 Drag and Drop List/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/82%20Drag%20and%20Drop%20List"
  },
  {
    name: "Dark Mode Toggle Website",
    description: "A website template with smooth dark/light mode toggle and persistent preference.",
    image: "assets/83-dark-mode-toggle-website.png",
    live: "83 Dark Mode Toggle Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/83%20Dark%20Mode%20Toggle%20Website"
  },
  {
    name: "Infinite Scroll Page",
    description: "A page with infinite scroll that dynamically loads content as the user scrolls.",
    image: "assets/84-infinite-scroll-page.png",
    live: "84 Infinite Scroll Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/84%20Infinite%20Scroll%20Page"
  },
  {
    name: "Search Filter UI",
    description: "A search and filter UI with live results, tags, and multi-criteria filtering.",
    image: "assets/85-search-filter-ui.png",
    live: "85 Search Filter UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/85%20Search%20Filter%20UI"
  },
  {
    name: "Kanban Board",
    description: "A Kanban board with drag-and-drop cards across To Do, In Progress, and Done columns.",
    image: "assets/86-kanban-board.png",
    live: "86 Kanban Board/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/86%20Kanban%20Board"
  },
  {
    name: "Pomodoro Timer",
    description: "A Pomodoro productivity timer with work/break cycles and session history.",
    image: "assets/87-pomodoro-timer.png",
    live: "87 Pomodoro Timer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/87%20Pomodoro%20Timer"
  },
  {
    name: "Calendar App",
    description: "A calendar app with event creation, monthly view, and date navigation.",
    image: "assets/88-calendar-app.png",
    live: "88 Calendar App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/88%20Calendar%20App"
  },
  {
    name: "Budget Planner",
    description: "A budget planner with income and expense input, category breakdown, and charts.",
    image: "assets/89-budget-planner.png",
    live: "89 Budget Planner/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/89%20Budget%20Planner"
  },
  {
    name: "Invoice Generator",
    description: "An invoice generator with client details, item list, tax calculation, and PDF export.",
    image: "assets/90-invoice-generator.png",
    live: "90 Invoice Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/90%20Invoice%20Generator"
  },
  {
    name: "E-Learning Platform UI",
    description: "An e-learning platform UI with course cards, video player, and progress tracking.",
    image: "assets/91-e-learning-platform-ui.png",
    live: "91 E-Learning Platform UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/91%20E-Learning%20Platform%20UI"
  },
  {
    name: "Online Exam System",
    description: "An online exam system with timed tests, MCQ format, and result summary.",
    image: "assets/92-online-exam-system.png",
    live: "92 Online Exam System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/92%20Online%20Exam%20System"
  },
  {
    name: "Student Attendance System",
    description: "A student attendance system with class-wise records and monthly reports.",
    image: "assets/93-student-attendance-system.png",
    live: "93 Student Attendance System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/93%20Student%20Attendance%20System"
  },
  {
    name: "Library Management System",
    description: "A library system to manage book inventory, issue/return records, and member data.",
    image: "assets/94-library-management-system.png",
    live: "94 Library Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/94%20Library%20Management%20System"
  },
  {
    name: "Hospital Appointment Booking",
    description: "A hospital appointment system with doctor listing, slot selection, and booking confirmation.",
    image: "assets/95-hospital-appointment-booking.png",
    live: "95 Hospital Appointment Booking/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/95%20Hospital%20Appointment%20Booking"
  },
  {
    name: "Pharmacy Website",
    description: "A pharmacy website with medicine listing, search, categories, and cart.",
    image: "assets/96-pharmacy-website.png",
    live: "96 Pharmacy Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/96%20Pharmacy%20Website"
  },
  {
    name: "Real Estate Listing Website",
    description: "A real estate site with property listings, filters, map view, and contact forms.",
    image: "assets/97-real-estate-listing-website.png",
    live: "97 Real Estate Listing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/97%20Real%20Estate%20Listing%20Website"
  },
  {
    name: "Car Rental Website",
    description: "A car rental website with vehicle listing, booking form, and availability calendar.",
    image: "assets/98-car-rental-website.png",
    live: "98 Car Rental Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/98%20Car%20Rental%20Website"
  },
  {
    name: "Hotel Booking Website",
    description: "A hotel booking site with room listings, date picker, and reservation management.",
    image: "assets/99-hotel-booking-website.png",
    live: "99 Hotel Booking Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/99%20Hotel%20Booking%20Website"
  },
  {
    name: "Flight Search Website",
    description: "A flight search website with origin/destination input, filters, and fare listing.",
    image: "assets/100-flight-search-website.png",
    live: "100 Flight Search Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/100%20Flight%20Search%20Website"
  },
  {
    name: "Grocery Delivery App UI",
    description: "A grocery delivery app UI with product grid, cart, and delivery slot selection.",
    image: "assets/101-grocery-delivery-app-ui.png",
    live: "101 Grocery Delivery App UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/101%20Grocery%20Delivery%20App%20UI"
  },
  {
    name: "Food Recipe Finder",
    description: "A recipe finder with ingredient-based search and step-by-step cooking instructions.",
    image: "assets/102-food-recipe-finder.png",
    live: "102 Food Recipe Finder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/102%20Food%20Recipe%20Finder"
  },
  {
    name: "Nutrition Tracker",
    description: "A nutrition tracker to log meals, count calories, and monitor daily macros.",
    image: "assets/103-nutrition-tracker.png",
    live: "103 Nutrition Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/103%20Nutrition%20Tracker"
  },
  {
    name: "Workout Plan Generator",
    description: "A workout plan generator that creates custom exercise schedules by fitness goal.",
    image: "assets/104-workout-plan-generator.png",
    live: "104 Workout Plan Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/104%20Workout%20Plan%20Generator"
  },
  {
    name: "Sleep Tracker App",
    description: "A sleep tracker to log sleep hours, quality, and view weekly rest patterns.",
    image: "assets/105-sleep-tracker-app.png",
    live: "105 Sleep Tracker App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/105%20Sleep%20Tracker%20App"
  },
  {
    name: "Pet Care Website",
    description: "A pet care website with breed info, vaccination reminders, and vet locator.",
    image: "assets/106-pet-care-website.png",
    live: "106 Pet Care Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/106%20Pet%20Care%20Website"
  },
  {
    name: "Plant Care Tracker",
    description: "A plant care tracker with watering schedules, sunlight needs, and plant diary.",
    image: "assets/107-plant-care-tracker.png",
    live: "107 Plant Care Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/107%20Plant%20Care%20Tracker"
  },
  {
    name: "Home Inventory Manager",
    description: "A home inventory manager to catalog household items with photos and categories.",
    image: "assets/108-home-inventory-manager.png",
    live: "108 Home Inventory Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/108%20Home%20Inventory%20Manager"
  },
  {
    name: "Garage Sale Website",
    description: "A garage sale listing site with item photos, prices, and contact details.",
    image: "assets/109-garage-sale-website.png",
    live: "109 Garage Sale Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/109%20Garage%20Sale%20Website"
  },
  {
    name: "Freelance Portfolio",
    description: "A freelance portfolio site with services, case studies, testimonials, and contact.",
    image: "assets/110-freelance-portfolio.png",
    live: "110 Freelance Portfolio/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/110%20Freelance%20Portfolio"
  },
  {
    name: "Agency Landing Page",
    description: "A creative agency landing page with hero section, services, team, and CTA.",
    image: "assets/111-agency-landing-page.png",
    live: "111 Agency Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/111%20Agency%20Landing%20Page"
  },
  {
    name: "SaaS Product Landing Page",
    description: "A SaaS landing page with features, pricing table, testimonials, and sign-up CTA.",
    image: "assets/112-saas-product-landing-page.png",
    live: "112 SaaS Product Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/112%20SaaS%20Product%20Landing%20Page"
  },
  {
    name: "App Download Landing Page",
    description: "A mobile app landing page with features, screenshots, and app store download links.",
    image: "assets/113-app-download-landing-page.png",
    live: "113 App Download Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/113%20App%20Download%20Landing%20Page"
  },
  {
    name: "Nonprofit Organization Website",
    description: "A nonprofit website with mission, programs, volunteer signup, and donation CTA.",
    image: "assets/114-nonprofit-organization-website.png",
    live: "114 Nonprofit Organization Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/114%20Nonprofit%20Organization%20Website"
  },
  {
    name: "Church Website",
    description: "A church website with service schedules, sermons, events, and contact info.",
    image: "assets/115-church-website.png",
    live: "115 Church Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/115%20Church%20Website"
  },
  {
    name: "School Website",
    description: "A school website with admission info, faculty profiles, news, and gallery.",
    image: "assets/116-school-website.png",
    live: "116 School Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/116%20School%20Website"
  },
  {
    name: "University Department Website",
    description: "A university department site with faculty, courses, research, and student resources.",
    image: "assets/117-university-department-website.png",
    live: "117 University Department Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/117%20University%20Department%20Website"
  },
  {
    name: "Sports Club Website",
    description: "A sports club website with team info, match schedule, results, and membership.",
    image: "assets/118-sports-club-website.png",
    live: "118 Sports Club Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/118%20Sports%20Club%20Website"
  },
  {
    name: "Gym Website",
    description: "A gym website with membership plans, class schedule, trainers, and contact.",
    image: "assets/119-gym-website.png",
    live: "119 Gym Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/119%20Gym%20Website"
  },
  {
    name: "Yoga Studio Website",
    description: "A yoga studio website with class types, instructors, schedule, and booking.",
    image: "assets/120-yoga-studio-website.png",
    live: "120 Yoga Studio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/120%20Yoga%20Studio%20Website"
  },
  {
    name: "Photography Studio Website",
    description: "A photography studio site with portfolio, packages, testimonials, and booking.",
    image: "assets/121-photography-studio-website.png",
    live: "121 Photography Studio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/121%20Photography%20Studio%20Website"
  },
  {
    name: "Wedding Planner Website",
    description: "A wedding planner site with services, gallery, vendor list, and inquiry form.",
    image: "assets/122-wedding-planner-website.png",
    live: "122 Wedding Planner Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/122%20Wedding%20Planner%20Website"
  },
  {
    name: "Event Ticketing Website",
    description: "An event ticketing site with event listing, seat selection, and ticket booking.",
    image: "assets/123-event-ticketing-website.png",
    live: "123 Event Ticketing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/123%20Event%20Ticketing%20Website"
  },
  {
    name: "Concert Listing Website",
    description: "A concert listing site with upcoming shows, artist info, and ticket purchase links.",
    image: "assets/124-concert-listing-website.png",
    live: "124 Concert Listing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/124%20Concert%20Listing%20Website"
  },
  {
    name: "Art Gallery Website",
    description: "An art gallery website with artwork showcase, artist bios, and exhibition info.",
    image: "assets/125-art-gallery-website.png",
    live: "125 Art Gallery Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/125%20Art%20Gallery%20Website"
  },
  {
    name: "Online Auction Website",
    description: "An online auction site with item listings, bidding system, and countdown timers.",
    image: "assets/126-online-auction-website.png",
    live: "126 Online Auction Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/126%20Online%20Auction%20Website"
  },
  {
    name: "Classified Ads Website",
    description: "A classified ads site with category browsing, ad posting, and search filters.",
    image: "assets/127-classified-ads-website.png",
    live: "127 Classified Ads Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/127%20Classified%20Ads%20Website"
  },
  {
    name: "Job Board Website",
    description: "A job board with listings, company profiles, filters, and application forms.",
    image: "assets/128-job-board-website.png",
    live: "128 Job Board Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/128%20Job%20Board%20Website"
  },
  {
    name: "Freelance Marketplace UI",
    description: "A freelance marketplace UI with gig listings, seller profiles, and order flow.",
    image: "assets/129-freelance-marketplace-ui.png",
    live: "129 Freelance Marketplace UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/129%20Freelance%20Marketplace%20UI"
  },
  {
    name: "Developer Portfolio",
    description: "A developer portfolio with skills, projects, GitHub stats, and contact section.",
    image: "assets/130-developer-portfolio.png",
    live: "130 Developer Portfolio/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/130%20Developer%20Portfolio"
  },
  {
    name: "GitHub Profile README Generator",
    description: "A tool to generate GitHub profile README with stats, badges, and social links.",
    image: "assets/131-github-profile-readme-generator.png",
    live: "131 GitHub Profile README Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/131%20GitHub%20Profile%20README%20Generator"
  },
  {
    name: "Tech Blog Website",
    description: "A tech blog with article listing, author profiles, tags, and comment section.",
    image: "assets/132-tech-blog-website.png",
    live: "132 Tech Blog Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/132%20Tech%20Blog%20Website"
  },
  {
    name: "News Aggregator Website",
    description: "A news aggregator that collects and displays top stories by topic and source.",
    image: "assets/133-news-aggregator-website.png",
    live: "133 News Aggregator Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/133%20News%20Aggregator%20Website"
  },
  {
    name: "Podcast Website",
    description: "A podcast website with episode listing, audio player, show notes, and subscribe option.",
    image: "assets/134-podcast-website.png",
    live: "134 Podcast Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/134%20Podcast%20Website"
  },
  {
    name: "Video Streaming UI",
    description: "A video streaming UI with thumbnail grid, video player, and recommended content.",
    image: "assets/135-video-streaming-ui.png",
    live: "135 Video Streaming UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/135%20Video%20Streaming%20UI"
  },
  {
    name: "Live Sports Score Website",
    description: "A live sports score website with match listings, scoreboards, and live updates UI.",
    image: "assets/136-live-sports-score-website.png",
    live: "136 Live Sports Score Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/136%20Live%20Sports%20Score%20Website"
  },
  {
    name: "Cryptocurrency Dashboard",
    description: "A crypto dashboard with coin listings, price charts, portfolio tracker, and news.",
    image: "assets/137-cryptocurrency-dashboard.png",
    live: "137 Cryptocurrency Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/137%20Cryptocurrency%20Dashboard"
  },
  {
    name: "Stock Market Tracker",
    description: "A stock market tracker with watchlist, price graphs, and market summary.",
    image: "assets/138-stock-market-tracker.png",
    live: "138 Stock Market Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/138%20Stock%20Market%20Tracker"
  },
  {
    name: "Forex Rate Tracker",
    description: "A forex tracker showing live exchange rates, currency pairs, and trend charts.",
    image: "assets/139-forex-rate-tracker.png",
    live: "139 Forex Rate Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/139%20Forex%20Rate%20Tracker"
  },
  {
    name: "Tax Calculator",
    description: "A tax calculator for income tax computation with slabs, deductions, and summary.",
    image: "assets/140-tax-calculator.png",
    live: "140 Tax Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/140%20Tax%20Calculator"
  },
  {
    name: "Loan EMI Calculator",
    description: "A loan EMI calculator with principal, rate, tenure inputs and amortization table.",
    image: "assets/141-loan-emi-calculator.png",
    live: "141 Loan EMI Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/141%20Loan%20EMI%20Calculator"
  },
  {
    name: "SIP Returns Calculator",
    description: "A SIP returns calculator to estimate mutual fund investment growth over time.",
    image: "assets/142-sip-returns-calculator.png",
    live: "142 SIP Returns Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/142%20SIP%20Returns%20Calculator"
  },
  {
    name: "Age Calculator",
    description: "An age calculator that computes exact age in years, months, and days from birthdate.",
    image: "assets/143-age-calculator.png",
    live: "143 Age Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/143%20Age%20Calculator"
  },
  {
    name: "Date Difference Calculator",
    description: "A calculator that finds the exact difference between two selected dates.",
    image: "assets/144-date-difference-calculator.png",
    live: "144 Date Difference Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/144%20Date%20Difference%20Calculator"
  },
  {
    name: "Time Zone Converter",
    description: "A time zone converter showing equivalent time across multiple world cities.",
    image: "assets/145-time-zone-converter.png",
    live: "145 Time Zone Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/145%20Time%20Zone%20Converter"
  },
  {
    name: "Unit Converter",
    description: "A unit converter supporting length, weight, temperature, speed, and volume.",
    image: "assets/146-unit-converter.png",
    live: "146 Unit Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/146%20Unit%20Converter"
  },
  {
    name: "Tip Calculator",
    description: "A tip calculator that splits bills and calculates tip percentage per person.",
    image: "assets/147-tip-calculator.png",
    live: "147 Tip Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/147%20Tip%20Calculator"
  },
  {
    name: "Discount Calculator",
    description: "A discount calculator to find sale price, savings amount, and discount percentage.",
    image: "assets/148-discount-calculator.png",
    live: "148 Discount Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/148%20Discount%20Calculator"
  },
  {
    name: "Number to Words Converter",
    description: "A converter that translates any number into its full English word representation.",
    image: "assets/149-number-to-words-converter.png",
    live: "149 Number to Words Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/149%20Number%20to%20Words%20Converter"
  },
  {
    name: "Roman Numeral Converter",
    description: "A converter between standard numbers and Roman numerals with instant output.",
    image: "assets/150-roman-numeral-converter.png",
    live: "150 Roman Numeral Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/150%20Roman%20Numeral%20Converter"
  },
  {
    name: "Binary to Decimal Converter",
    description: "A converter between binary, decimal, octal, and hexadecimal number systems.",
    image: "assets/151-binary-to-decimal-converter.png",
    live: "151 Binary to Decimal Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/151%20Binary%20to%20Decimal%20Converter"
  },
  {
    name: "Text Encryption Tool",
    description: "A text encryption tool to encode and decode messages using various cipher methods.",
    image: "assets/152-text-encryption-tool.png",
    live: "152 Text Encryption Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/152%20Text%20Encryption%20Tool"
  },
  {
    name: "Password Strength Checker",
    description: "A password strength checker with real-time feedback and security improvement tips.",
    image: "assets/153-password-strength-checker.png",
    live: "153 Password Strength Checker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/153%20Password%20Strength%20Checker"
  },
  {
    name: "Random Password Generator",
    description: "A secure random password generator with length and character type options.",
    image: "assets/154-random-password-generator.png",
    live: "154 Random Password Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/154%20Random%20Password%20Generator"
  },
  {
    name: "IP Address Lookup",
    description: "An IP address lookup tool showing location, ISP, and network details.",
    image: "assets/155-ip-address-lookup.png",
    live: "155 IP Address Lookup/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/155%20IP%20Address%20Lookup"
  },
  {
    name: "Website Speed Test UI",
    description: "A website speed test UI that displays performance scores and loading metrics.",
    image: "assets/156-website-speed-test-ui.png",
    live: "156 Website Speed Test UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/156%20Website%20Speed%20Test%20UI"
  },
  {
    name: "SEO Meta Tag Generator",
    description: "An SEO meta tag generator for title, description, keywords, and Open Graph tags.",
    image: "assets/157-seo-meta-tag-generator.png",
    live: "157 SEO Meta Tag Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/157%20SEO%20Meta%20Tag%20Generator"
  },
  {
    name: "CSS Gradient Generator",
    description: "A CSS gradient generator with live preview, direction control, and code output.",
    image: "assets/158-css-gradient-generator.png",
    live: "158 CSS Gradient Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/158%20CSS%20Gradient%20Generator"
  },
  {
    name: "Box Shadow Generator",
    description: "A box shadow generator with sliders for offset, blur, spread, and color picker.",
    image: "assets/159-box-shadow-generator.png",
    live: "159 Box Shadow Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/159%20Box%20Shadow%20Generator"
  },
  {
    name: "Border Radius Generator",
    description: "A border radius generator with individual corner control and live CSS preview.",
    image: "assets/160-border-radius-generator.png",
    live: "160 Border Radius Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/160%20Border%20Radius%20Generator"
  },
  {
    name: "Flexbox Playground",
    description: "An interactive Flexbox playground to experiment with CSS flex properties live.",
    image: "assets/161-flexbox-playground.png",
    live: "161 Flexbox Playground/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/161%20Flexbox%20Playground"
  },
  {
    name: "CSS Grid Playground",
    description: "A CSS Grid playground to build and visualize grid layouts with live code output.",
    image: "assets/162-css-grid-playground.png",
    live: "162 CSS Grid Playground/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/162%20CSS%20Grid%20Playground"
  },
  {
    name: "HTML Table Generator",
    description: "An HTML table generator with row/column controls and formatted code export.",
    image: "assets/163-html-table-generator.png",
    live: "163 HTML Table Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/163%20HTML%20Table%20Generator"
  },
  {
    name: "Button Style Generator",
    description: "A CSS button style generator with hover effects, radius, and color customization.",
    image: "assets/164-button-style-generator.png",
    live: "164 Button Style Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/164%20Button%20Style%20Generator"
  },
  {
    name: "Icon Library Browser",
    description: "An icon library browser to search, preview, and copy icon code snippets.",
    image: "assets/165-icon-library-browser.png",
    live: "165 Icon Library Browser/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/165%20Icon%20Library%20Browser"
  },
  {
    name: "Font Pairing Tool",
    description: "A font pairing tool to preview and select complementary Google Fonts combinations.",
    image: "assets/166-font-pairing-tool.png",
    live: "166 Font Pairing Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/166%20Font%20Pairing%20Tool"
  },
  {
    name: "Favicon Generator UI",
    description: "A favicon generator UI to create and download custom site icons in multiple sizes.",
    image: "assets/167-favicon-generator-ui.png",
    live: "167 Favicon Generator UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/167%20Favicon%20Generator%20UI"
  },
  {
    name: "Placeholder Image Generator",
    description: "A placeholder image generator with custom size, color, and text overlays.",
    image: "assets/168-placeholder-image-generator.png",
    live: "168 Placeholder Image Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/168%20Placeholder%20Image%20Generator"
  },
  {
    name: "Lorem Ipsum Generator",
    description: "A lorem ipsum generator for dummy text in paragraphs, words, or sentences.",
    image: "assets/169-lorem-ipsum-generator.png",
    live: "169 Lorem Ipsum Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/169%20Lorem%20Ipsum%20Generator"
  },
  {
    name: "Sitemap Generator UI",
    description: "A sitemap generator UI that builds XML sitemap structure from entered URLs.",
    image: "assets/170-sitemap-generator-ui.png",
    live: "170 Sitemap Generator UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/170%20Sitemap%20Generator%20UI"
  },
  {
    name: "Online Whiteboard",
    description: "A collaborative online whiteboard with drawing tools, shapes, and text notes.",
    image: "assets/171-online-whiteboard.png",
    live: "171 Online Whiteboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/171%20Online%20Whiteboard"
  },
  {
    name: "Mind Map Creator",
    description: "A mind map creator with node linking, color coding, and export functionality.",
    image: "assets/172-mind-map-creator.png",
    live: "172 Mind Map Creator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/172%20Mind%20Map%20Creator"
  },
  {
    name: "Flowchart Builder",
    description: "A drag-and-drop flowchart builder with shapes, connectors, and diagram export.",
    image: "assets/173-flowchart-builder.png",
    live: "173 Flowchart Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/173%20Flowchart%20Builder"
  },
  {
    name: "Gantt Chart Viewer",
    description: "A Gantt chart viewer to visualize project timelines, tasks, and dependencies.",
    image: "assets/174-gantt-chart-viewer.png",
    live: "174 Gantt Chart Viewer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/174%20Gantt%20Chart%20Viewer"
  },
  {
    name: "Survey Builder",
    description: "A survey builder to design custom forms with multiple question types and logic.",
    image: "assets/175-survey-builder.png",
    live: "175 Survey Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/175%20Survey%20Builder"
  },
  {
    name: "Form Builder",
    description: "A drag-and-drop form builder to create custom web forms with validation rules.",
    image: "assets/176-form-builder.png",
    live: "176 Form Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/176%20Form%20Builder"
  },
  {
    name: "Email Template Builder",
    description: "An email template builder with block editor, preview, and HTML code export.",
    image: "assets/177-email-template-builder.png",
    live: "177 Email Template Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/177%20Email%20Template%20Builder"
  },
  {
    name: "Newsletter Archive Website",
    description: "A newsletter archive site to browse, search, and read past email campaigns.",
    image: "assets/178-newsletter-archive-website.png",
    live: "178 Newsletter Archive Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/178%20Newsletter%20Archive%20Website"
  },
  {
    name: "FAQ Page",
    description: "A stylish FAQ page with accordion-style answers and category-based filtering.",
    image: "assets/179-faq-page.png",
    live: "179 FAQ Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/179%20FAQ%20Page"
  },
  {
    name: "Terms and Conditions Page",
    description: "A well-formatted terms and conditions page with section navigation and timestamps.",
    image: "assets/180-terms-and-conditions-page.png",
    live: "180 Terms and Conditions Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/180%20Terms%20and%20Conditions%20Page"
  },
  {
    name: "Privacy Policy Page",
    description: "A clean privacy policy page with data usage details and legal compliance layout.",
    image: "assets/181-privacy-policy-page.png",
    live: "181 Privacy Policy Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/181%20Privacy%20Policy%20Page"
  },
  {
    name: "Cookie Consent Banner",
    description: "A cookie consent banner with accept/decline options and preference management.",
    image: "assets/182-cookie-consent-banner.png",
    live: "182 Cookie Consent Banner/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/182%20Cookie%20Consent%20Banner"
  },
  {
    name: "Maintenance Page",
    description: "A maintenance mode page with countdown timer and notify-me email input.",
    image: "assets/183-maintenance-page.png",
    live: "183 Maintenance Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/183%20Maintenance%20Page"
  },
  {
    name: "404 Error Page",
    description: "A creative 404 error page with animation, helpful links, and search bar.",
    image: "assets/184-404-error-page.png",
    live: "184 404 Error Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/184%20404%20Error%20Page"
  },
  {
    name: "Coming Soon Page",
    description: "A coming soon landing page with countdown, email signup, and social media links.",
    image: "assets/185-coming-soon-page.png",
    live: "185 Coming Soon Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/185%20Coming%20Soon%20Page"
  },
  {
    name: "Thank You Page",
    description: "A thank you confirmation page shown after form submission or purchase completion.",
    image: "assets/186-thank-you-page.png",
    live: "186 Thank You Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/186%20Thank%20You%20Page"
  },
  {
    name: "Login and Register Page",
    description: "A login and registration page with form validation, toggle tabs, and error states.",
    image: "assets/187-login-and-register-page.png",
    live: "187 Login and Register Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/187%20Login%20and%20Register%20Page"
  },
  {
    name: "OTP Verification Page",
    description: "An OTP verification page with digit input boxes, resend timer, and validation.",
    image: "assets/188-otp-verification-page.png",
    live: "188 OTP Verification Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/188%20OTP%20Verification%20Page"
  },
  {
    name: "Profile Settings Page",
    description: "A user profile settings page with avatar upload, form fields, and save options.",
    image: "assets/189-profile-settings-page.png",
    live: "189 Profile Settings Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/189%20Profile%20Settings%20Page"
  },
  {
    name: "Notification Center UI",
    description: "A notification center UI with grouped alerts, read/unread states, and filters.",
    image: "assets/190-notification-center-ui.png",
    live: "190 Notification Center UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/190%20Notification%20Center%20UI"
  },
  {
    name: "Admin Dashboard",
    description: "A full admin dashboard with stats cards, charts, tables, and sidebar navigation.",
    image: "assets/191-admin-dashboard.png",
    live: "191 Admin Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/191%20Admin%20Dashboard"
  },
  {
    name: "Analytics Dashboard",
    description: "An analytics dashboard with traffic graphs, user stats, and performance KPIs.",
    image: "assets/192-analytics-dashboard.png",
    live: "192 Analytics Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/192%20Analytics%20Dashboard"
  },
  {
    name: "User Management Panel",
    description: "A user management panel with listing, role assignment, search, and CRUD actions.",
    image: "assets/193-user-management-panel.png",
    live: "193 User Management Panel/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/193%20User%20Management%20Panel"
  },
  {
    name: "Role Permission Manager",
    description: "A role and permission manager UI with access matrix and role assignment controls.",
    image: "assets/194-role-permission-manager.png",
    live: "194 Role Permission Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/194%20Role%20Permission%20Manager"
  },
  {
    name: "Audit Log Viewer",
    description: "An audit log viewer displaying user activity, timestamps, and filter options.",
    image: "assets/195-audit-log-viewer.png",
    live: "195 Audit Log Viewer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/195%20Audit%20Log%20Viewer"
  },
  {
    name: "Multi-Step Form Wizard",
    description: "A multi-step form wizard with progress bar, validation, and back/next navigation.",
    image: "assets/196-multi-step-form-wizard.png",
    live: "196 Multi-Step Form Wizard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/196%20Multi-Step%20Form%20Wizard"
  },
  {
    name: "Image Crop and Upload UI",
    description: "An image crop and upload interface with drag-resize cropper and preview panel.",
    image: "assets/197-image-crop-and-upload-ui.png",
    live: "197 Image Crop and Upload UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/197%20Image%20Crop%20and%20Upload%20UI"
  },
  {
    name: "Video Upload Page",
    description: "A video upload page with drag-and-drop zone, progress bar, and metadata form.",
    image: "assets/198-video-upload-page.png",
    live: "198 Video Upload Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/198%20Video%20Upload%20Page"
  },
  {
    name: "File Manager UI",
    description: "A file manager UI with folder tree, grid/list view, upload, and file operations.",
    image: "assets/199-file-manager-ui.png",
    live: "199 File Manager UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/199%20File%20Manager%20UI"
  },
  {
    name: "Chat Support Widget",
    description: "A live chat support widget with message bubbles, bot replies, and minimize toggle.",
    image: "assets/200-chat-support-widget.png",
    live: "200 Chat Support Widget/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/200%20Chat%20Support%20Widget"
  }
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="buttons">
        <a href="${project.live}" class="btn primary">Open Website</a>
        <a href="${project.code}" target="_blank" class="btn secondary">View Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = projects.length;const projects = [
  {
    name: "Student Portfolio Website",
    description: "A personal portfolio website showcasing student projects, skills, and achievements.",
    emoji: "🎓",
    live: "01 Student Portfolio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/01%20Student%20Portfolio%20Website"
  },
  {
    name: "Personal Blog Platform",
    description: "A clean personal blog platform with post listing, categories, and reading layout.",
    emoji: "✍️",
    live: "02 Personal Blog Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/02%20Personal%20Blog%20Platform"
  },
  {
    name: "Online Notes Manager",
    description: "A web-based notes manager to create, edit, and organize personal notes.",
    emoji: "📝",
    live: "03 Online Notes Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/03%20Online%20Notes%20Manager"
  },
  {
    name: "ToDo App with Login",
    description: "A to-do list app with user login, task management, and priority sorting.",
    emoji: "✅",
    live: "04 ToDo App with Login/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/04%20ToDo%20App%20with%20Login"
  },
  {
    name: "Contact Management System",
    description: "A system to add, search, edit, and delete contacts with a clean UI.",
    emoji: "📇",
    live: "05 Contact Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/05%20Contact%20Management%20System"
  },
  {
    name: "Event Registration Website",
    description: "An event registration site with form submission, seat selection, and confirmation.",
    emoji: "🎟️",
    live: "06 Event Registration Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/06%20Event%20Registration%20Website"
  },
  {
    name: "Simple Ecommerce Store",
    description: "A basic e-commerce store with product listing, cart, and checkout UI.",
    emoji: "🛒",
    live: "07 Simple Ecommerce Store/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/07%20Simple%20Ecommerce%20Store"
  },
  {
    name: "Feedback Collection System",
    description: "A feedback form system with ratings, comments, and submission tracking.",
    emoji: "💬",
    live: "08 Feedback Collection System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/08%20Feedback%20Collection%20System"
  },
  {
    name: "Online Quiz Application",
    description: "An interactive quiz app with timer, scoring, and result display.",
    emoji: "🧠",
    live: "09 Online Quiz Application/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/09%20Online%20Quiz%20Application"
  },
  {
    name: "URL Shortener",
    description: "A URL shortener tool that generates short links and tracks click counts.",
    emoji: "🔗",
    live: "10 URL Shortener/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/10%20URL%20Shortener"
  },
  {
    name: "Weather Forecast App",
    description: "A weather app showing current conditions and weekly forecast by city.",
    emoji: "⛅",
    live: "11 Weather Forecast App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/11%20Weather%20Forecast%20App"
  },
  {
    name: "Expense Tracker",
    description: "Track daily expenses with categories, totals, and a visual spending summary.",
    emoji: "💸",
    live: "12 Expense Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/12%20Expense%20Tracker"
  },
  {
    name: "Online Book Library",
    description: "A digital library to browse, search, and read books by genre and author.",
    emoji: "📚",
    live: "13 Online Book Library/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/13%20Online%20Book%20Library"
  },
  {
    name: "Job Application Portal",
    description: "A job portal where users can browse listings and submit applications online.",
    emoji: "💼",
    live: "14 Job Application Portal/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/14%20Job%20Application%20Portal"
  },
  {
    name: "Restaurant Menu Website",
    description: "A restaurant website with categorized menu, item details, and order UI.",
    emoji: "🍽️",
    live: "15 Restaurant Menu Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/15%20Restaurant%20Menu%20Website"
  },
  {
    name: "Online Voting System",
    description: "A secure online voting system with candidate listing and live vote counts.",
    emoji: "🗳️",
    live: "16 Online Voting System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/16%20Online%20Voting%20System"
  },
  {
    name: "Digital Diary App",
    description: "A private digital diary to write, save, and revisit daily journal entries.",
    emoji: "📔",
    live: "17 Digital Diary App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/17%20Digital%20Diary%20App"
  },
  {
    name: "Online Complaint System",
    description: "A complaint submission and tracking system with status updates and categories.",
    emoji: "📢",
    live: "18 Online Complaint System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/18%20Online%20Complaint%20System"
  },
  {
    name: "Password Manager",
    description: "A local password manager to securely store and retrieve credentials.",
    emoji: "🔐",
    live: "19 Password Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/19%20Password%20Manager"
  },
  {
    name: "Newsletter Subscription System",
    description: "A newsletter signup system with email collection and subscription confirmation.",
    emoji: "📧",
    live: "20 Newsletter Subscription System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/20%20Newsletter%20Subscription%20System"
  },
  {
    name: "Course Enrollment Website",
    description: "An online course enrollment platform with course listing and registration forms.",
    emoji: "🎒",
    live: "21 Course Enrollment Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/21%20Course%20Enrollment%20Website"
  },
  {
    name: "Online Polling App",
    description: "A polling application to create polls, vote, and view real-time results.",
    emoji: "📊",
    live: "22 Online Polling App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/22%20Online%20Polling%20App"
  },
  {
    name: "Resume Builder Website",
    description: "A resume builder with live preview, templates, and downloadable output.",
    emoji: "📄",
    live: "23 Resume Builder Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/23%20Resume%20Builder%20Website"
  },
  {
    name: "Product Review Platform",
    description: "A product review site with ratings, user reviews, and category filtering.",
    emoji: "⭐",
    live: "24 Product Review Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/24%20Product%20Review%20Platform"
  },
  {
    name: "Image Gallery System",
    description: "A responsive image gallery with lightbox, filters, and grid layout.",
    emoji: "🖼️",
    live: "25 Image Gallery System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/25%20Image%20Gallery%20System"
  },
  {
    name: "Online Appointment Booking",
    description: "An appointment booking system with date/time slots and confirmation emails.",
    emoji: "📅",
    live: "26 Online Appointment Booking/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/26%20Online%20Appointment%20Booking"
  },
  {
    name: "Task Management Tool",
    description: "A task management tool with priority labels, deadlines, and progress tracking.",
    emoji: "📋",
    live: "28 Task Management Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/28%20Task%20Management%20Tool"
  },
  {
    name: "Attendance Management System",
    description: "An attendance tracker for students or employees with daily records and reports.",
    emoji: "🙋",
    live: "29 Attendance Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/29%20Attendance%20Management%20System"
  },
  {
    name: "Online Feedback Analyzer",
    description: "A feedback analyzer that collects responses and visualizes sentiment and trends.",
    emoji: "📈",
    live: "30 Online Feedback Analyzer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/30%20Online%20Feedback%20Analyzer"
  },
  {
    name: "Personal Finance Tracker",
    description: "A finance tracker to monitor income, expenses, savings, and budget goals.",
    emoji: "💰",
    live: "31 Personal Finance Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/31%20Personal%20Finance%20Tracker"
  },
  {
    name: "Online FAQ System",
    description: "An FAQ management system with searchable questions and collapsible answers.",
    emoji: "❓",
    live: "32 Online FAQ System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/32%20Online%20FAQ%20System"
  },
  {
    name: "Digital Certificate Generator",
    description: "A certificate generator that creates custom downloadable certificates with user details.",
    emoji: "🏅",
    live: "33 Digital Certificate Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/33%20Digital%20Certificate%20Generator"
  },
  {
    name: "Online File Upload System",
    description: "A file upload interface with drag-and-drop support and file type validation.",
    emoji: "📤",
    live: "34 Online File Upload System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/34%20Online%20File%20Upload%20System"
  },
  {
    name: "Static Blog with CMS",
    description: "A static blog with a content management interface for posts and categories.",
    emoji: "🗂️",
    live: "35 Static Blog with CMS/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/35%20Static%20Blog%20with%20CMS"
  },
  {
    name: "Student Result Management",
    description: "A result management system to enter, view, and export student marks and grades.",
    emoji: "📊",
    live: "36 Student Result Management/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/36%20Student%20Result%20Management"
  },
  {
    name: "Online Survey Platform",
    description: "A survey builder and response collector with charts and summary statistics.",
    emoji: "📋",
    live: "37 Online Survey Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/37%20Online%20Survey%20Platform"
  },
  {
    name: "Blood Donation System",
    description: "A blood donation portal to register donors, search blood groups, and request blood.",
    emoji: "🩸",
    live: "38 Blood Donation System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/38%20Blood%20Donation%20System"
  },
  {
    name: "College Club Management",
    description: "A college club management site with member registration, events, and announcements.",
    emoji: "🏛️",
    live: "39 College Club Management/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/39%20College%20Club%20Management"
  },
  {
    name: "Online Learning Resource Hub",
    description: "A resource hub with curated learning materials, videos, and topic-based filtering.",
    emoji: "🌐",
    live: "40 Online Learning Resource Hub/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/40%20Online%20Learning%20Resource%20Hub"
  },
  {
    name: "Online Address Book",
    description: "A digital address book to save and search contact details with map links.",
    emoji: "📖",
    live: "41 Online Address Book/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/41%20Online%20Address%20Book"
  },
  {
    name: "Daily Planner App",
    description: "A daily planner to schedule tasks, set reminders, and track productivity.",
    emoji: "🗓️",
    live: "42 Daily Planner App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/42%20Daily%20Planner%20App"
  },
  {
    name: "Online Discussion Forum",
    description: "A discussion forum with threads, replies, upvotes, and topic-based categories.",
    emoji: "💭",
    live: "43 Online Discussion Forum/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/43%20Online%20Discussion%20Forum"
  },
  {
    name: "Online Voting Poll Dashboard",
    description: "A voting poll dashboard with live results, charts, and multiple poll management.",
    emoji: "🗳️",
    live: "45 Online Voting Poll Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/45%20Online%20Voting%20Poll%20Dashboard"
  },
  {
    name: "Online Event Countdown App",
    description: "A countdown timer app for upcoming events with animated clock display.",
    emoji: "⏳",
    live: "46 Online Event Countdown App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/46%20Online%20Event%20Countdown%20App"
  },
  {
    name: "Digital Clock Alarm System",
    description: "A digital clock with alarm setting, snooze, and multiple time zone support.",
    emoji: "⏰",
    live: "47 Digital Clock Alarm System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/47%20Digital%20Clock%20Alarm%20System"
  },
  {
    name: "Online Image Compressor",
    description: "A browser-based image compressor to reduce file size while maintaining quality.",
    emoji: "🗜️",
    live: "48 Online Image Compressor/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/48%20Online%20Image%20Compressor"
  },
  {
    name: "Online PDF Merger Tool",
    description: "A tool to upload, arrange, and merge multiple PDF files into one document.",
    emoji: "📑",
    live: "49 Online PDF Merger Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/49%20Online%20PDF%20Merger%20Tool"
  },
  {
    name: "Static Company Website Admin",
    description: "A static company website with admin panel UI for content and team management.",
    emoji: "🏢",
    live: "50 Static Company Website Admin/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/50%20Static%20Company%20Website%20Admin"
  },
  {
    name: "Student Grade Calculator",
    description: "A grade calculator that computes GPA and letter grades from entered marks.",
    emoji: "🔢",
    live: "51 Student Grade Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/51%20Student%20Grade%20Calculator"
  },
  {
    name: "Online Poll System",
    description: "A polling system to create, share, and track votes on any topic.",
    emoji: "🗳️",
    live: "52 Online Poll System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/52%20Online%20Poll%20System"
  },
  {
    name: "Recipe Sharing Platform",
    description: "A recipe platform to post, search, and save favorite recipes by cuisine.",
    emoji: "🍳",
    live: "53 Recipe Sharing Platform/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/53%20Recipe%20Sharing%20Platform"
  },
  {
    name: "Personal Finance Dashboard",
    description: "A finance dashboard with income, expense charts, and savings goal tracking.",
    emoji: "💹",
    live: "54 Personal Finance Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/54%20Personal%20Finance%20Dashboard"
  },
  {
    name: "Chat Application UI",
    description: "A modern chat UI with message bubbles, emoji support, and contact sidebar.",
    emoji: "💬",
    live: "55 Chat Application UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/55%20Chat%20Application%20UI"
  },
  {
    name: "Movie Review Website",
    description: "A movie review site with ratings, user comments, and genre-based browsing.",
    emoji: "🎬",
    live: "56 Movie Review Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/56%20Movie%20Review%20Website"
  },
  {
    name: "Music Playlist Manager",
    description: "A music playlist manager to create, edit, and play organized song collections.",
    emoji: "🎵",
    live: "57 Music Playlist Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/57%20Music%20Playlist%20Manager"
  },
  {
    name: "Portfolio Gallery",
    description: "A visual portfolio gallery with filterable categories and lightbox previews.",
    emoji: "🖼️",
    live: "58 Portfolio Gallery/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/58%20Portfolio%20Gallery"
  },
  {
    name: "Typing Speed Test",
    description: "A typing speed test with WPM counter, accuracy tracking, and difficulty levels.",
    emoji: "⌨️",
    live: "59 Typing Speed Test/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/59%20Typing%20Speed%20Test"
  },
  {
    name: "Currency Converter",
    description: "A real-time currency converter supporting multiple international currencies.",
    emoji: "💱",
    live: "60 Currency Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/60%20Currency%20Converter"
  },
  {
    name: "BMI Calculator",
    description: "A BMI calculator with health category display and weight recommendation tips.",
    emoji: "⚖️",
    live: "61 BMI Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/61%20BMI%20Calculator"
  },
  {
    name: "Countdown Timer App",
    description: "A customizable countdown timer with start, pause, reset, and alert features.",
    emoji: "⏱️",
    live: "62 Countdown Timer App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/62%20Countdown%20Timer%20App"
  },
  {
    name: "Random Quote Generator",
    description: "A quote generator that displays random motivational quotes with share options.",
    emoji: "💡",
    live: "63 Random Quote Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/63%20Random%20Quote%20Generator"
  },
  {
    name: "Color Palette Generator",
    description: "A color palette generator to create, copy, and export beautiful color schemes.",
    emoji: "🎨",
    live: "64 Color Palette Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/64%20Color%20Palette%20Generator"
  },
  {
    name: "Memory Card Game",
    description: "A flip-and-match memory card game with difficulty levels and move counter.",
    emoji: "🃏",
    live: "65 Memory Card Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/65%20Memory%20Card%20Game"
  },
  {
    name: "Tic Tac Toe Game",
    description: "A two-player Tic Tac Toe game with win detection and score tracking.",
    emoji: "❌",
    live: "66 Tic Tac Toe Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/66%20Tic%20Tac%20Toe%20Game"
  },
  {
    name: "Snake Game",
    description: "A classic Snake game with score tracking, speed levels, and game-over screen.",
    emoji: "🐍",
    live: "67 Snake Game/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/67%20Snake%20Game"
  },
  {
    name: "Sudoku Puzzle",
    description: "A Sudoku game with auto-generation, validation, hints, and difficulty settings.",
    emoji: "🔢",
    live: "68 Sudoku Puzzle/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/68%20Sudoku%20Puzzle"
  },
  {
    name: "Chess Board UI",
    description: "An interactive chess board UI with piece movement rules and turn management.",
    emoji: "♟️",
    live: "69 Chess Board UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/69%20Chess%20Board%20UI"
  },
  {
    name: "Word Counter Tool",
    description: "A word and character counter tool with reading time estimate and keyword density.",
    emoji: "🔤",
    live: "70 Word Counter Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/70%20Word%20Counter%20Tool"
  },
  {
    name: "Online Resume Builder",
    description: "An online resume builder with live preview, section editing, and PDF export.",
    emoji: "📄",
    live: "71 Online Resume Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/71%20Online%20Resume%20Builder"
  },
  {
    name: "Travel Blog Website",
    description: "A travel blog with destination posts, photo galleries, and trip guides.",
    emoji: "✈️",
    live: "72 Travel Blog Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/72%20Travel%20Blog%20Website"
  },
  {
    name: "Fitness Tracker App",
    description: "A fitness tracker to log workouts, track calories, and view progress charts.",
    emoji: "🏋️",
    live: "73 Fitness Tracker App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/73%20Fitness%20Tracker%20App"
  },
  {
    name: "Habit Tracker",
    description: "A daily habit tracker with streaks, completion checkmarks, and weekly overview.",
    emoji: "🔥",
    live: "74 Habit Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/74%20Habit%20Tracker"
  },
  {
    name: "Meditation Timer",
    description: "A meditation timer with ambient sounds, session logging, and breathing guide.",
    emoji: "🧘",
    live: "75 Meditation Timer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/75%20Meditation%20Timer"
  },
  {
    name: "Language Flashcard App",
    description: "A language learning flashcard app with flip animation, scoring, and deck management.",
    emoji: "🗣️",
    live: "76 Language Flashcard App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/76%20Language%20Flashcard%20App"
  },
  {
    name: "Code Snippet Manager",
    description: "A code snippet manager with syntax highlighting, tags, and copy-to-clipboard.",
    emoji: "💻",
    live: "77 Code Snippet Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/77%20Code%20Snippet%20Manager"
  },
  {
    name: "Markdown Editor",
    description: "A live markdown editor with split-screen preview and formatting toolbar.",
    emoji: "📝",
    live: "78 Markdown Editor/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/78%20Markdown%20Editor"
  },
  {
    name: "JSON Formatter Tool",
    description: "A JSON formatter and validator with syntax highlighting and error detection.",
    emoji: "🧩",
    live: "79 JSON Formatter Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/79%20JSON%20Formatter%20Tool"
  },
  {
    name: "QR Code Generator",
    description: "A QR code generator that converts text or URLs into downloadable QR images.",
    emoji: "📲",
    live: "80 QR Code Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/80%20QR%20Code%20Generator"
  },
  {
    name: "Image Slider Component",
    description: "A responsive image slider with autoplay, navigation arrows, and dot indicators.",
    emoji: "🎠",
    live: "81 Image Slider Component/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/81%20Image%20Slider%20Component"
  },
  {
    name: "Drag and Drop List",
    description: "A drag-and-drop sortable list with reorder, delete, and save functionality.",
    emoji: "↕️",
    live: "82 Drag and Drop List/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/82%20Drag%20and%20Drop%20List"
  },
  {
    name: "Dark Mode Toggle Website",
    description: "A website template with smooth dark/light mode toggle and persistent preference.",
    emoji: "🌙",
    live: "83 Dark Mode Toggle Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/83%20Dark%20Mode%20Toggle%20Website"
  },
  {
    name: "Infinite Scroll Page",
    description: "A page with infinite scroll that dynamically loads content as the user scrolls.",
    emoji: "♾️",
    live: "84 Infinite Scroll Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/84%20Infinite%20Scroll%20Page"
  },
  {
    name: "Search Filter UI",
    description: "A search and filter UI with live results, tags, and multi-criteria filtering.",
    emoji: "🔍",
    live: "85 Search Filter UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/85%20Search%20Filter%20UI"
  },
  {
    name: "Kanban Board",
    description: "A Kanban board with drag-and-drop cards across To Do, In Progress, and Done columns.",
    emoji: "📌",
    live: "86 Kanban Board/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/86%20Kanban%20Board"
  },
  {
    name: "Pomodoro Timer",
    description: "A Pomodoro productivity timer with work/break cycles and session history.",
    emoji: "🍅",
    live: "87 Pomodoro Timer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/87%20Pomodoro%20Timer"
  },
  {
    name: "Calendar App",
    description: "A calendar app with event creation, monthly view, and date navigation.",
    emoji: "📅",
    live: "88 Calendar App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/88%20Calendar%20App"
  },
  {
    name: "Budget Planner",
    description: "A budget planner with income and expense input, category breakdown, and charts.",
    emoji: "🏦",
    live: "89 Budget Planner/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/89%20Budget%20Planner"
  },
  {
    name: "Invoice Generator",
    description: "An invoice generator with client details, item list, tax calculation, and PDF export.",
    emoji: "🧾",
    live: "90 Invoice Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/90%20Invoice%20Generator"
  },
  {
    name: "E-Learning Platform UI",
    description: "An e-learning platform UI with course cards, video player, and progress tracking.",
    emoji: "🎓",
    live: "91 E-Learning Platform UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/91%20E-Learning%20Platform%20UI"
  },
  {
    name: "Online Exam System",
    description: "An online exam system with timed tests, MCQ format, and result summary.",
    emoji: "📝",
    live: "92 Online Exam System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/92%20Online%20Exam%20System"
  },
  {
    name: "Student Attendance System",
    description: "A student attendance system with class-wise records and monthly reports.",
    emoji: "🙋",
    live: "93 Student Attendance System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/93%20Student%20Attendance%20System"
  },
  {
    name: "Library Management System",
    description: "A library system to manage book inventory, issue/return records, and member data.",
    emoji: "🏛️",
    live: "94 Library Management System/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/94%20Library%20Management%20System"
  },
  {
    name: "Hospital Appointment Booking",
    description: "A hospital appointment system with doctor listing, slot selection, and booking confirmation.",
    emoji: "🏥",
    live: "95 Hospital Appointment Booking/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/95%20Hospital%20Appointment%20Booking"
  },
  {
    name: "Pharmacy Website",
    description: "A pharmacy website with medicine listing, search, categories, and cart.",
    emoji: "💊",
    live: "96 Pharmacy Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/96%20Pharmacy%20Website"
  },
  {
    name: "Real Estate Listing Website",
    description: "A real estate site with property listings, filters, map view, and contact forms.",
    emoji: "🏠",
    live: "97 Real Estate Listing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/97%20Real%20Estate%20Listing%20Website"
  },
  {
    name: "Car Rental Website",
    description: "A car rental website with vehicle listing, booking form, and availability calendar.",
    emoji: "🚗",
    live: "98 Car Rental Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/98%20Car%20Rental%20Website"
  },
  {
    name: "Hotel Booking Website",
    description: "A hotel booking site with room listings, date picker, and reservation management.",
    emoji: "🏨",
    live: "99 Hotel Booking Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/99%20Hotel%20Booking%20Website"
  },
  {
    name: "Flight Search Website",
    description: "A flight search website with origin/destination input, filters, and fare listing.",
    emoji: "✈️",
    live: "100 Flight Search Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/100%20Flight%20Search%20Website"
  },
  {
    name: "Grocery Delivery App UI",
    description: "A grocery delivery app UI with product grid, cart, and delivery slot selection.",
    emoji: "🛵",
    live: "101 Grocery Delivery App UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/101%20Grocery%20Delivery%20App%20UI"
  },
  {
    name: "Food Recipe Finder",
    description: "A recipe finder with ingredient-based search and step-by-step cooking instructions.",
    emoji: "🥘",
    live: "102 Food Recipe Finder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/102%20Food%20Recipe%20Finder"
  },
  {
    name: "Nutrition Tracker",
    description: "A nutrition tracker to log meals, count calories, and monitor daily macros.",
    emoji: "🥗",
    live: "103 Nutrition Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/103%20Nutrition%20Tracker"
  },
  {
    name: "Workout Plan Generator",
    description: "A workout plan generator that creates custom exercise schedules by fitness goal.",
    emoji: "🏃",
    live: "104 Workout Plan Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/104%20Workout%20Plan%20Generator"
  },
  {
    name: "Sleep Tracker App",
    description: "A sleep tracker to log sleep hours, quality, and view weekly rest patterns.",
    emoji: "😴",
    live: "105 Sleep Tracker App/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/105%20Sleep%20Tracker%20App"
  },
  {
    name: "Pet Care Website",
    description: "A pet care website with breed info, vaccination reminders, and vet locator.",
    emoji: "🐾",
    live: "106 Pet Care Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/106%20Pet%20Care%20Website"
  },
  {
    name: "Plant Care Tracker",
    description: "A plant care tracker with watering schedules, sunlight needs, and plant diary.",
    emoji: "🌱",
    live: "107 Plant Care Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/107%20Plant%20Care%20Tracker"
  },
  {
    name: "Home Inventory Manager",
    description: "A home inventory manager to catalog household items with photos and categories.",
    emoji: "🏡",
    live: "108 Home Inventory Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/108%20Home%20Inventory%20Manager"
  },
  {
    name: "Garage Sale Website",
    description: "A garage sale listing site with item photos, prices, and contact details.",
    emoji: "🏷️",
    live: "109 Garage Sale Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/109%20Garage%20Sale%20Website"
  },
  {
    name: "Freelance Portfolio",
    description: "A freelance portfolio site with services, case studies, testimonials, and contact.",
    emoji: "🧑‍💻",
    live: "110 Freelance Portfolio/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/110%20Freelance%20Portfolio"
  },
  {
    name: "Agency Landing Page",
    description: "A creative agency landing page with hero section, services, team, and CTA.",
    emoji: "🚀",
    live: "111 Agency Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/111%20Agency%20Landing%20Page"
  },
  {
    name: "SaaS Product Landing Page",
    description: "A SaaS landing page with features, pricing table, testimonials, and sign-up CTA.",
    emoji: "☁️",
    live: "112 SaaS Product Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/112%20SaaS%20Product%20Landing%20Page"
  },
  {
    name: "App Download Landing Page",
    description: "A mobile app landing page with features, screenshots, and app store download links.",
    emoji: "📱",
    live: "113 App Download Landing Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/113%20App%20Download%20Landing%20Page"
  },
  {
    name: "Nonprofit Organization Website",
    description: "A nonprofit website with mission, programs, volunteer signup, and donation CTA.",
    emoji: "🤝",
    live: "114 Nonprofit Organization Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/114%20Nonprofit%20Organization%20Website"
  },
  {
    name: "Church Website",
    description: "A church website with service schedules, sermons, events, and contact info.",
    emoji: "⛪",
    live: "115 Church Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/115%20Church%20Website"
  },
  {
    name: "School Website",
    description: "A school website with admission info, faculty profiles, news, and gallery.",
    emoji: "🏫",
    live: "116 School Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/116%20School%20Website"
  },
  {
    name: "University Department Website",
    description: "A university department site with faculty, courses, research, and student resources.",
    emoji: "🎓",
    live: "117 University Department Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/117%20University%20Department%20Website"
  },
  {
    name: "Sports Club Website",
    description: "A sports club website with team info, match schedule, results, and membership.",
    emoji: "🏆",
    live: "118 Sports Club Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/118%20Sports%20Club%20Website"
  },
  {
    name: "Gym Website",
    description: "A gym website with membership plans, class schedule, trainers, and contact.",
    emoji: "💪",
    live: "119 Gym Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/119%20Gym%20Website"
  },
  {
    name: "Yoga Studio Website",
    description: "A yoga studio website with class types, instructors, schedule, and booking.",
    emoji: "🧘",
    live: "120 Yoga Studio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/120%20Yoga%20Studio%20Website"
  },
  {
    name: "Photography Studio Website",
    description: "A photography studio site with portfolio, packages, testimonials, and booking.",
    emoji: "📷",
    live: "121 Photography Studio Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/121%20Photography%20Studio%20Website"
  },
  {
    name: "Wedding Planner Website",
    description: "A wedding planner site with services, gallery, vendor list, and inquiry form.",
    emoji: "💍",
    live: "122 Wedding Planner Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/122%20Wedding%20Planner%20Website"
  },
  {
    name: "Event Ticketing Website",
    description: "An event ticketing site with event listing, seat selection, and ticket booking.",
    emoji: "🎫",
    live: "123 Event Ticketing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/123%20Event%20Ticketing%20Website"
  },
  {
    name: "Concert Listing Website",
    description: "A concert listing site with upcoming shows, artist info, and ticket purchase links.",
    emoji: "🎸",
    live: "124 Concert Listing Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/124%20Concert%20Listing%20Website"
  },
  {
    name: "Art Gallery Website",
    description: "An art gallery website with artwork showcase, artist bios, and exhibition info.",
    emoji: "🎭",
    live: "125 Art Gallery Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/125%20Art%20Gallery%20Website"
  },
  {
    name: "Online Auction Website",
    description: "An online auction site with item listings, bidding system, and countdown timers.",
    emoji: "🔨",
    live: "126 Online Auction Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/126%20Online%20Auction%20Website"
  },
  {
    name: "Classified Ads Website",
    description: "A classified ads site with category browsing, ad posting, and search filters.",
    emoji: "📰",
    live: "127 Classified Ads Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/127%20Classified%20Ads%20Website"
  },
  {
    name: "Job Board Website",
    description: "A job board with listings, company profiles, filters, and application forms.",
    emoji: "🗃️",
    live: "128 Job Board Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/128%20Job%20Board%20Website"
  },
  {
    name: "Freelance Marketplace UI",
    description: "A freelance marketplace UI with gig listings, seller profiles, and order flow.",
    emoji: "🛍️",
    live: "129 Freelance Marketplace UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/129%20Freelance%20Marketplace%20UI"
  },
  {
    name: "Developer Portfolio",
    description: "A developer portfolio with skills, projects, GitHub stats, and contact section.",
    emoji: "👨‍💻",
    live: "130 Developer Portfolio/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/130%20Developer%20Portfolio"
  },
  {
    name: "GitHub Profile README Generator",
    description: "A tool to generate GitHub profile README with stats, badges, and social links.",
    emoji: "🐙",
    live: "131 GitHub Profile README Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/131%20GitHub%20Profile%20README%20Generator"
  },
  {
    name: "Tech Blog Website",
    description: "A tech blog with article listing, author profiles, tags, and comment section.",
    emoji: "🖥️",
    live: "132 Tech Blog Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/132%20Tech%20Blog%20Website"
  },
  {
    name: "News Aggregator Website",
    description: "A news aggregator that collects and displays top stories by topic and source.",
    emoji: "📡",
    live: "133 News Aggregator Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/133%20News%20Aggregator%20Website"
  },
  {
    name: "Podcast Website",
    description: "A podcast website with episode listing, audio player, show notes, and subscribe option.",
    emoji: "🎙️",
    live: "134 Podcast Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/134%20Podcast%20Website"
  },
  {
    name: "Video Streaming UI",
    description: "A video streaming UI with thumbnail grid, video player, and recommended content.",
    emoji: "▶️",
    live: "135 Video Streaming UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/135%20Video%20Streaming%20UI"
  },
  {
    name: "Live Sports Score Website",
    description: "A live sports score website with match listings, scoreboards, and live updates UI.",
    emoji: "⚽",
    live: "136 Live Sports Score Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/136%20Live%20Sports%20Score%20Website"
  },
  {
    name: "Cryptocurrency Dashboard",
    description: "A crypto dashboard with coin listings, price charts, portfolio tracker, and news.",
    emoji: "₿",
    live: "137 Cryptocurrency Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/137%20Cryptocurrency%20Dashboard"
  },
  {
    name: "Stock Market Tracker",
    description: "A stock market tracker with watchlist, price graphs, and market summary.",
    emoji: "📉",
    live: "138 Stock Market Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/138%20Stock%20Market%20Tracker"
  },
  {
    name: "Forex Rate Tracker",
    description: "A forex tracker showing live exchange rates, currency pairs, and trend charts.",
    emoji: "💲",
    live: "139 Forex Rate Tracker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/139%20Forex%20Rate%20Tracker"
  },
  {
    name: "Tax Calculator",
    description: "A tax calculator for income tax computation with slabs, deductions, and summary.",
    emoji: "🧮",
    live: "140 Tax Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/140%20Tax%20Calculator"
  },
  {
    name: "Loan EMI Calculator",
    description: "A loan EMI calculator with principal, rate, tenure inputs and amortization table.",
    emoji: "🏦",
    live: "141 Loan EMI Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/141%20Loan%20EMI%20Calculator"
  },
  {
    name: "SIP Returns Calculator",
    description: "A SIP returns calculator to estimate mutual fund investment growth over time.",
    emoji: "📈",
    live: "142 SIP Returns Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/142%20SIP%20Returns%20Calculator"
  },
  {
    name: "Age Calculator",
    description: "An age calculator that computes exact age in years, months, and days from birthdate.",
    emoji: "🎂",
    live: "143 Age Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/143%20Age%20Calculator"
  },
  {
    name: "Date Difference Calculator",
    description: "A calculator that finds the exact difference between two selected dates.",
    emoji: "📆",
    live: "144 Date Difference Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/144%20Date%20Difference%20Calculator"
  },
  {
    name: "Time Zone Converter",
    description: "A time zone converter showing equivalent time across multiple world cities.",
    emoji: "🌍",
    live: "145 Time Zone Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/145%20Time%20Zone%20Converter"
  },
  {
    name: "Unit Converter",
    description: "A unit converter supporting length, weight, temperature, speed, and volume.",
    emoji: "📐",
    live: "146 Unit Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/146%20Unit%20Converter"
  },
  {
    name: "Tip Calculator",
    description: "A tip calculator that splits bills and calculates tip percentage per person.",
    emoji: "🍴",
    live: "147 Tip Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/147%20Tip%20Calculator"
  },
  {
    name: "Discount Calculator",
    description: "A discount calculator to find sale price, savings amount, and discount percentage.",
    emoji: "🏷️",
    live: "148 Discount Calculator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/148%20Discount%20Calculator"
  },
  {
    name: "Number to Words Converter",
    description: "A converter that translates any number into its full English word representation.",
    emoji: "🔡",
    live: "149 Number to Words Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/149%20Number%20to%20Words%20Converter"
  },
  {
    name: "Roman Numeral Converter",
    description: "A converter between standard numbers and Roman numerals with instant output.",
    emoji: "🏛️",
    live: "150 Roman Numeral Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/150%20Roman%20Numeral%20Converter"
  },
  {
    name: "Binary to Decimal Converter",
    description: "A converter between binary, decimal, octal, and hexadecimal number systems.",
    emoji: "🔢",
    live: "151 Binary to Decimal Converter/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/151%20Binary%20to%20Decimal%20Converter"
  },
  {
    name: "Text Encryption Tool",
    description: "A text encryption tool to encode and decode messages using various cipher methods.",
    emoji: "🔒",
    live: "152 Text Encryption Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/152%20Text%20Encryption%20Tool"
  },
  {
    name: "Password Strength Checker",
    description: "A password strength checker with real-time feedback and security improvement tips.",
    emoji: "🛡️",
    live: "153 Password Strength Checker/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/153%20Password%20Strength%20Checker"
  },
  {
    name: "Random Password Generator",
    description: "A secure random password generator with length and character type options.",
    emoji: "🔑",
    live: "154 Random Password Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/154%20Random%20Password%20Generator"
  },
  {
    name: "IP Address Lookup",
    description: "An IP address lookup tool showing location, ISP, and network details.",
    emoji: "🌐",
    live: "155 IP Address Lookup/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/155%20IP%20Address%20Lookup"
  },
  {
    name: "Website Speed Test UI",
    description: "A website speed test UI that displays performance scores and loading metrics.",
    emoji: "⚡",
    live: "156 Website Speed Test UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/156%20Website%20Speed%20Test%20UI"
  },
  {
    name: "SEO Meta Tag Generator",
    description: "An SEO meta tag generator for title, description, keywords, and Open Graph tags.",
    emoji: "🔎",
    live: "157 SEO Meta Tag Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/157%20SEO%20Meta%20Tag%20Generator"
  },
  {
    name: "CSS Gradient Generator",
    description: "A CSS gradient generator with live preview, direction control, and code output.",
    emoji: "🌈",
    live: "158 CSS Gradient Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/158%20CSS%20Gradient%20Generator"
  },
  {
    name: "Box Shadow Generator",
    description: "A box shadow generator with sliders for offset, blur, spread, and color picker.",
    emoji: "🟫",
    live: "159 Box Shadow Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/159%20Box%20Shadow%20Generator"
  },
  {
    name: "Border Radius Generator",
    description: "A border radius generator with individual corner control and live CSS preview.",
    emoji: "🔲",
    live: "160 Border Radius Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/160%20Border%20Radius%20Generator"
  },
  {
    name: "Flexbox Playground",
    description: "An interactive Flexbox playground to experiment with CSS flex properties live.",
    emoji: "↔️",
    live: "161 Flexbox Playground/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/161%20Flexbox%20Playground"
  },
  {
    name: "CSS Grid Playground",
    description: "A CSS Grid playground to build and visualize grid layouts with live code output.",
    emoji: "⊞",
    live: "162 CSS Grid Playground/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/162%20CSS%20Grid%20Playground"
  },
  {
    name: "HTML Table Generator",
    description: "An HTML table generator with row/column controls and formatted code export.",
    emoji: "📊",
    live: "163 HTML Table Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/163%20HTML%20Table%20Generator"
  },
  {
    name: "Button Style Generator",
    description: "A CSS button style generator with hover effects, radius, and color customization.",
    emoji: "🖱️",
    live: "164 Button Style Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/164%20Button%20Style%20Generator"
  },
  {
    name: "Icon Library Browser",
    description: "An icon library browser to search, preview, and copy icon code snippets.",
    emoji: "🔣",
    live: "165 Icon Library Browser/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/165%20Icon%20Library%20Browser"
  },
  {
    name: "Font Pairing Tool",
    description: "A font pairing tool to preview and select complementary Google Fonts combinations.",
    emoji: "🔠",
    live: "166 Font Pairing Tool/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/166%20Font%20Pairing%20Tool"
  },
  {
    name: "Favicon Generator UI",
    description: "A favicon generator UI to create and download custom site icons in multiple sizes.",
    emoji: "⭐",
    live: "167 Favicon Generator UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/167%20Favicon%20Generator%20UI"
  },
  {
    name: "Placeholder Image Generator",
    description: "A placeholder image generator with custom size, color, and text overlays.",
    emoji: "🖼️",
    live: "168 Placeholder Image Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/168%20Placeholder%20Image%20Generator"
  },
  {
    name: "Lorem Ipsum Generator",
    description: "A lorem ipsum generator for dummy text in paragraphs, words, or sentences.",
    emoji: "📜",
    live: "169 Lorem Ipsum Generator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/169%20Lorem%20Ipsum%20Generator"
  },
  {
    name: "Sitemap Generator UI",
    description: "A sitemap generator UI that builds XML sitemap structure from entered URLs.",
    emoji: "🗺️",
    live: "170 Sitemap Generator UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/170%20Sitemap%20Generator%20UI"
  },
  {
    name: "Online Whiteboard",
    description: "A collaborative online whiteboard with drawing tools, shapes, and text notes.",
    emoji: "🖊️",
    live: "171 Online Whiteboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/171%20Online%20Whiteboard"
  },
  {
    name: "Mind Map Creator",
    description: "A mind map creator with node linking, color coding, and export functionality.",
    emoji: "🧠",
    live: "172 Mind Map Creator/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/172%20Mind%20Map%20Creator"
  },
  {
    name: "Flowchart Builder",
    description: "A drag-and-drop flowchart builder with shapes, connectors, and diagram export.",
    emoji: "🔀",
    live: "173 Flowchart Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/173%20Flowchart%20Builder"
  },
  {
    name: "Gantt Chart Viewer",
    description: "A Gantt chart viewer to visualize project timelines, tasks, and dependencies.",
    emoji: "📅",
    live: "174 Gantt Chart Viewer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/174%20Gantt%20Chart%20Viewer"
  },
  {
    name: "Survey Builder",
    description: "A survey builder to design custom forms with multiple question types and logic.",
    emoji: "📋",
    live: "175 Survey Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/175%20Survey%20Builder"
  },
  {
    name: "Form Builder",
    description: "A drag-and-drop form builder to create custom web forms with validation rules.",
    emoji: "📝",
    live: "176 Form Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/176%20Form%20Builder"
  },
  {
    name: "Email Template Builder",
    description: "An email template builder with block editor, preview, and HTML code export.",
    emoji: "✉️",
    live: "177 Email Template Builder/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/177%20Email%20Template%20Builder"
  },
  {
    name: "Newsletter Archive Website",
    description: "A newsletter archive site to browse, search, and read past email campaigns.",
    emoji: "📬",
    live: "178 Newsletter Archive Website/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/178%20Newsletter%20Archive%20Website"
  },
  {
    name: "FAQ Page",
    description: "A stylish FAQ page with accordion-style answers and category-based filtering.",
    emoji: "❓",
    live: "179 FAQ Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/179%20FAQ%20Page"
  },
  {
    name: "Terms and Conditions Page",
    description: "A well-formatted terms and conditions page with section navigation and timestamps.",
    emoji: "📃",
    live: "180 Terms and Conditions Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/180%20Terms%20and%20Conditions%20Page"
  },
  {
    name: "Privacy Policy Page",
    description: "A clean privacy policy page with data usage details and legal compliance layout.",
    emoji: "🔏",
    live: "181 Privacy Policy Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/181%20Privacy%20Policy%20Page"
  },
  {
    name: "Cookie Consent Banner",
    description: "A cookie consent banner with accept/decline options and preference management.",
    emoji: "🍪",
    live: "182 Cookie Consent Banner/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/182%20Cookie%20Consent%20Banner"
  },
  {
    name: "Maintenance Page",
    description: "A maintenance mode page with countdown timer and notify-me email input.",
    emoji: "🔧",
    live: "183 Maintenance Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/183%20Maintenance%20Page"
  },
  {
    name: "404 Error Page",
    description: "A creative 404 error page with animation, helpful links, and search bar.",
    emoji: "🚫",
    live: "184 404 Error Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/184%20404%20Error%20Page"
  },
  {
    name: "Coming Soon Page",
    description: "A coming soon landing page with countdown, email signup, and social media links.",
    emoji: "🚧",
    live: "185 Coming Soon Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/185%20Coming%20Soon%20Page"
  },
  {
    name: "Thank You Page",
    description: "A thank you confirmation page shown after form submission or purchase completion.",
    emoji: "🙏",
    live: "186 Thank You Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/186%20Thank%20You%20Page"
  },
  {
    name: "Login and Register Page",
    description: "A login and registration page with form validation, toggle tabs, and error states.",
    emoji: "🔓",
    live: "187 Login and Register Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/187%20Login%20and%20Register%20Page"
  },
  {
    name: "OTP Verification Page",
    description: "An OTP verification page with digit input boxes, resend timer, and validation.",
    emoji: "🔢",
    live: "188 OTP Verification Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/188%20OTP%20Verification%20Page"
  },
  {
    name: "Profile Settings Page",
    description: "A user profile settings page with avatar upload, form fields, and save options.",
    emoji: "👤",
    live: "189 Profile Settings Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/189%20Profile%20Settings%20Page"
  },
  {
    name: "Notification Center UI",
    description: "A notification center UI with grouped alerts, read/unread states, and filters.",
    emoji: "🔔",
    live: "190 Notification Center UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/190%20Notification%20Center%20UI"
  },
  {
    name: "Admin Dashboard",
    description: "A full admin dashboard with stats cards, charts, tables, and sidebar navigation.",
    emoji: "🖥️",
    live: "191 Admin Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/191%20Admin%20Dashboard"
  },
  {
    name: "Analytics Dashboard",
    description: "An analytics dashboard with traffic graphs, user stats, and performance KPIs.",
    emoji: "📊",
    live: "192 Analytics Dashboard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/192%20Analytics%20Dashboard"
  },
  {
    name: "User Management Panel",
    description: "A user management panel with listing, role assignment, search, and CRUD actions.",
    emoji: "👥",
    live: "193 User Management Panel/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/193%20User%20Management%20Panel"
  },
  {
    name: "Role Permission Manager",
    description: "A role and permission manager UI with access matrix and role assignment controls.",
    emoji: "🔐",
    live: "194 Role Permission Manager/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/194%20Role%20Permission%20Manager"
  },
  {
    name: "Audit Log Viewer",
    description: "An audit log viewer displaying user activity, timestamps, and filter options.",
    emoji: "📋",
    live: "195 Audit Log Viewer/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/195%20Audit%20Log%20Viewer"
  },
  {
    name: "Multi-Step Form Wizard",
    description: "A multi-step form wizard with progress bar, validation, and back/next navigation.",
    emoji: "🧙",
    live: "196 Multi-Step Form Wizard/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/196%20Multi-Step%20Form%20Wizard"
  },
  {
    name: "Image Crop and Upload UI",
    description: "An image crop and upload interface with drag-resize cropper and preview panel.",
    emoji: "✂️",
    live: "197 Image Crop and Upload UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/197%20Image%20Crop%20and%20Upload%20UI"
  },
  {
    name: "Video Upload Page",
    description: "A video upload page with drag-and-drop zone, progress bar, and metadata form.",
    emoji: "🎥",
    live: "198 Video Upload Page/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/198%20Video%20Upload%20Page"
  },
  {
    name: "File Manager UI",
    description: "A file manager UI with folder tree, grid/list view, upload, and file operations.",
    emoji: "📁",
    live: "199 File Manager UI/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/199%20File%20Manager%20UI"
  },
  {
    name: "Chat Support Widget",
    description: "A live chat support widget with message bubbles, bot replies, and minimize toggle.",
    emoji: "🤖",
    live: "200 Chat Support Widget/index.html",
    code: "https://github.com/komalkharat/Full-Stack-Developement/tree/main/200%20Chat%20Support%20Widget"
  }
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-emoji">${project.emoji}</div>
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="buttons">
        <a href="${project.live}" class="btn primary">Open Website</a>
        <a href="${project.code}" target="_blank" class="btn secondary">View Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = projects.length;