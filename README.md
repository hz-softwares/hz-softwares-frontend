# TODO
    [] Implement Distributed Queuing Service (In Progress)
    [] Implement microservices patterns from this site https://microservices.io/index.html
    [] Implement Text Search using elastic search
    [] Implement Ordering Service like(FTGO example in micro-service book) using implemented queue service





🧠 1. Algorithm Visualizer CLI-Style App

    A terminal-style app that visualizes classic algorithms with no/low styling using monospace layout or <pre>.

Key Features:

    Pathfinding: BFS, DFS, Dijkstra, A*

    Sorting: Merge Sort, Quick Sort, Heap Sort

    Recursion tree visualization (e.g., Fibonacci, backtracking)

    Step-by-step or animated execution

    Use <pre> blocks and minimal CSS (dark background, monospace)

Why it's great:

    Minimal UI (mostly text-based)

    Focus on computation and state updates

    Showcases signal reactivity and smart updates

🔎 2. Fast Local Search Engine

    A UI that demonstrates full-text search, fuzzy search, and custom ranking from a large JSON corpus (e.g., 10k+ items).

Key Features:

    Use Fuse.js or MiniSearch in a Web Worker

    As-you-type results with fuzzy scoring

    Highlighted matches

    Filters (tags, ranges) using signals

Performance focus:

    Debounced inputs

    Virtualized rendering

    Offloaded computation (Web Workers)

📚 3. In-Browser Code Runner

    A frontend-only mini playground where users can enter JS or Python code, and you simulate its execution.

Features:

    Sandboxed evaluation

    Simulated call stack visualization

    Show runtime vs input size

    Built-in example challenges (e.g., "reverse a string", "fizzbuzz")

Highlights:

    Uses algorithms + input/output

    Solid reactivity to track changes

    No complex UI (console-like layout)

🔄 4. Diff & Patch Visualizer

    A tool that compares two JSON structures and shows how to transform A → B efficiently.

Features:

    JSON diff algorithm implementation

    Highlight changes in text

    Visual representation of operations (add, delete, update)

Why it's smart:

    You’ll implement tree diffing

    Optimize with memoization

    Render only updated parts

🗂 5. Virtual File Explorer (Huge Tree Performance)

    Simulates browsing 100k+ deeply nested folders and files using SolidJS signals.

Features:

    Virtual scrolling

    Lazy tree expansion

    Search/filter nodes

    Memory-efficient rendering

Why it's powerful:

    Complex data structure (tree)

    Optimized updates using createMemo, keyed lists

    Can simulate Git folder explorer behavior
