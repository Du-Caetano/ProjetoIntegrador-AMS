using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProviderController : ControllerBase
    {
        public IBaseService<Provider> Service { get; }
        public IMapper Mapper { get; }
        public ProviderController(IBaseService<Provider> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProviderModel provider)
        {

            var provider1 = this.Mapper.Map<Provider>(provider);

            this.Service.Add(provider1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Provider/{provider.Id}", provider);
            return BadRequest();
        }

        [HttpGet] //Feito
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<ProviderModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet ("{ProviderId}")]
        public async Task<IActionResult>GetById(string ProviderId)
        {
            var entity = await this.Service.GetById(ProviderId);
            var results = this.Mapper.Map<ProviderModel>(entity);
            return Ok(entity);
        }

         [HttpPut("{Id}")]
         public async Task<IActionResult> Put(string Id, ProviderModel model)
         {
           var entity = await this.Service.GetById(Id);
            if (entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update (entity);
            if (await this.Service.SaveChangesAsync())
                return Created($"api/Provider/{model.Id}", this.Mapper.Map<ProviderModel>(entity));
            return BadRequest();
         }  

         [HttpDelete("{Id}")]
         public async Task<IActionResult>Delete(string Id) 
         {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();
            this.Service.Delete(entity);

            if (await this.Service.SaveChangesAsync())
            return Ok();
            return BadRequest();   
         }
    }
}