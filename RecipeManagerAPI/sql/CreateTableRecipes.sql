CREATE TABLE IF NOT EXISTS Recipes (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Category TEXT NOT NULL,
    Ingredients TEXT NOT NULL,
    Instructions TEXT NOT NULL,
    IsFavorite INTEGER NOT NULL,
    Notes TEXT
);