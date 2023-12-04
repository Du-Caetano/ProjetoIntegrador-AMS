namespace Domain.Entity
{
    public class Category 
    {
      public string Id { get; set; } = Guid.NewGuid().ToString();
      public string Description {get; set;} = ""; 
      
    }
}