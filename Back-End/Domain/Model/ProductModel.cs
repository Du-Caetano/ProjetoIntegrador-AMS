namespace Domain.Model
{
    public class ProductModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public string IdCategory { get; set; } = "";
        public string urlImage { get; set; } //Imagem do Produto
        public int  Amount { get; set; }
        public  decimal Price {get; set;}        
    }
}