namespace Domain.Interfaces
{
    public interface IBaseService<T> where T : class
    {
        void Add(T entity); //Adicionar
        Task<IEnumerable<T>> GetAll(); //Listar todos
        Task<T> GetById(string id); //Listar id
        void Update(T entity); //Alterar
        void Delete(T entity); //Deletar
        Task<bool> SaveChangesAsync(); //Salvar
    }
}