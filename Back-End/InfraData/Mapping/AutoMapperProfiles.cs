using AutoMapper;
using Domain.Entity;
using Domain.Model;

namespace InfraData.Mapping
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Product, ProductModel>().ReverseMap();
            
            CreateMap<Category, CategoryModel>().ReverseMap();

            CreateMap<Admin, AdminModel>().ReverseMap();

            CreateMap<Provider, ProviderModel>().ReverseMap();

            CreateMap<Client, ClientModel>().ReverseMap();


        }
    }
}
