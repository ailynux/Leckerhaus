UPDATE Recipes
SET Name = @Name, Category = @Category, Ingredients = @Ingredients, Instructions = @Instructions, IsFavorite = @IsFavorite, Notes = @Notes
WHERE Id = @Id;