using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeManagerAPI.Model
{
    public class Recipe
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Category { get; set; }
        public string? Ingredients { get; set; }
        public string? Instructions { get; set; }
        public bool IsFavorite { get; set; }
        public string? Notes { get; set; }
    }
}