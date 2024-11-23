using Microsoft.EntityFrameworkCore;
using RecipeManagerAPI.Model;

namespace RecipeManagerAPI.Data
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions<RecipeContext> options) : base(options) { }
        public DbSet<Recipe> Recipes { get; set; }
    }
}