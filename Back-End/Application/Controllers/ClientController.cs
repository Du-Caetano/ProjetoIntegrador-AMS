using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        public IBaseService<Client> Service { get; }
        public IMapper Mapper { get; }
        public ClientController(IBaseService<Client> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ClientModel client)
        {

            var client1 = this.Mapper.Map<Client>(client);

            this.Service.Add(client1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Client/{client.Id}", client);
            return BadRequest();
        }

        [HttpGet] //Feito
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<ClientModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet ("{ClientId}")]
        public async Task<IActionResult>GetById(string ClientId)
        {
            var entity = await this.Service.GetById(ClientId);
            var results = this.Mapper.Map<ClientModel>(entity);
            return Ok(entity);
        }

         [HttpPut("{Id}")]
         public async Task<IActionResult> Put(string Id, ClientModel model)
         {
           var entity = await this.Service.GetById(Id);
            if (entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update (entity);
            if (await this.Service.SaveChangesAsync())
                return Created($"api/Client/{model.Id}", this.Mapper.Map<ClientModel>(entity));
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