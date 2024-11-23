using Microsoft.Data.Sqlite;
using Dapper;
using RecipeManagerAPI.Model;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "RecipeManagerAPI", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "RecipeManagerAPI v1");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
    });
}

var connectionString = "Data Source=recipes.db";
var createTableSql = File.ReadAllText("Sql/CreateTableRecipes.sql");
using (var connection = new SqliteConnection(connectionString))
{
    connection.Execute(createTableSql);
}

app.MapGet("/api/recipes", async () =>
{
    var selectAllRecipesSql = File.ReadAllText("Sql/SelectAllRecipes.sql");
    using var connection = new SqliteConnection(connectionString);
    var recipes = await connection.QueryAsync<Recipe>(selectAllRecipesSql);
    return Results.Ok(recipes);
});

app.MapGet("/api/recipes/{id}", async (int id) =>
{
    var selectRecipeByIdSql = File.ReadAllText("Sql/SelectRecipeById.sql");
    using var connection = new SqliteConnection(connectionString);
    var recipe = await connection.QueryFirstOrDefaultAsync<Recipe>(selectRecipeByIdSql, new { Id = id });
    return recipe is not null ? Results.Ok(recipe) : Results.NotFound();
});

app.MapPost("/api/recipes", async (Recipe recipe) =>
{
    var insertRecipeSql = File.ReadAllText("Sql/InsertRecipe.sql");
    using var connection = new SqliteConnection(connectionString);
    var id = await connection.ExecuteAsync(insertRecipeSql, recipe);
    return Results.Created($"/api/recipes/{id}", recipe);
});

app.MapPut("/api/recipes/{id}", async (int id, Recipe updatedRecipe) =>
{
    var updateRecipeSql = File.ReadAllText("Sql/UpdateRecipe.sql");
    using var connection = new SqliteConnection(connectionString);
    var affectedRows = await connection.ExecuteAsync(updateRecipeSql, new { updatedRecipe.Name, updatedRecipe.Category, updatedRecipe.Ingredients, updatedRecipe.Instructions, updatedRecipe.IsFavorite, updatedRecipe.Notes, Id = id });
    return affectedRows > 0 ? Results.NoContent() : Results.NotFound();
});

app.MapDelete("/api/recipes/{id}", async (int id) =>
{
    var deleteRecipeSql = File.ReadAllText("Sql/DeleteRecipe.sql");
    using var connection = new SqliteConnection(connectionString);
    var affectedRows = await connection.ExecuteAsync(deleteRecipeSql, new { Id = id });
    return affectedRows > 0 ? Results.NoContent() : Results.NotFound();
});

app.Run();