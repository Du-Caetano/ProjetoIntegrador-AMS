using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public IBaseService<Admin> Service { get; }
        public IMapper Mapper { get; }
        public AdminController(IBaseService<Admin> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(AdminModel Admin)
        {

            var Admin1 = this.Mapper.Map<Admin>(Admin);

            this.Service.Add(Admin1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Admin/{Admin.Id}", Admin);
            return BadRequest();
        }

        [HttpGet] //Feito
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<AdminModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet ("{AdminId}")]
        public async Task<IActionResult>GetById(string AdminId)
        {
            var entity = await this.Service.GetById(AdminId);
            var results = this.Mapper.Map<AdminModel>(entity);
            return Ok(entity);
        }

         [HttpPut("{Id}")]
         public async Task<IActionResult> Put(string Id, AdminModel model)
         {
           var entity = await this.Service.GetById(Id);
            if (entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update (entity);
            if (await this.Service.SaveChangesAsync())
                return Created($"api/Admin/{model.Id}", this.Mapper.Map<AdminModel>(entity));
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