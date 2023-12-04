using AutoMapper;
using Domain.Entity;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public IBaseService<Product> Service { get; }
        public IMapper Mapper { get; }
        public ProductController(IBaseService<Product> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProductModel product)
        {

            var product1 = this.Mapper.Map<Product>(product);
            product1.urlImage = "assets/" + Path.GetFileName(product.urlImage);

            this.Service.Add(product1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Product/{product.Id}", product);
            return BadRequest();
        }

        [HttpGet] //Feito
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<ProductModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet ("{ProductId}")]
        public async Task<IActionResult>GetById(string ProductId)
        {
            var entity = await this.Service.GetById(ProductId);
            var results = this.Mapper.Map<ProductModel>(entity);
            return Ok(entity);
        }

         [HttpPut("{Id}")]
         public async Task<IActionResult> Put(string Id, ProductModel model)
         {
           var entity = await this.Service.GetById(Id);
            if (entity == null) return NotFound();
            
            model.urlImage = "assets/" + Path.GetFileName(model.urlImage);
            this.Mapper.Map(model, entity);
            this.Service.Update (entity);
            if (await this.Service.SaveChangesAsync())
                return Created($"api/Product/{model.Id}", this.Mapper.Map<ProductModel>(entity));
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