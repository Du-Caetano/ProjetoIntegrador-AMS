using Microsoft.EntityFrameworkCore;
using Domain.Entity;
namespace InfraData.Context

{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
        public DbSet <Product> Products {get; set;}
        public DbSet <Category> Category {get; set;}
        public DbSet <Admin> Admins {get; set;}
        public DbSet <Provider> Providers {get; set;}
        public DbSet <Client> Clients {get; set;}


    }
}