using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASP_Demo.Models
{
    public class Review
    {
        public int Id { get; set; }
        [ForeignKey("Game")]
        public int GameId { get; set; }
        public short Score { get; set; }
        public DateTime Timestamp { get; set; }

        public virtual Game Game { get; set; }
    }
}
