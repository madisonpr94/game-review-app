using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASP_Demo.Models
{
    public class GameContext : DbContext
    {
        public GameContext (DbContextOptions<GameContext> options)
            : base(options)
        {
        }

        public DbSet<ASP_Demo.Models.Game> Game { get; set; }
    }
}
