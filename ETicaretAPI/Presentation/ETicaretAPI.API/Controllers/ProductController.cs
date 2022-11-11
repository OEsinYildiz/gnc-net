using System.Net;
using ETicaret.Application.Repository;
using ETicaret.Application.ViewModels.Products;
using ETicaretAPI.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly IProductReadRepository _productReadRepository;
    private readonly IProductWriteRepository _productWriteRepository;

    public ProductController(IProductReadRepository productReadRepository,
        IProductWriteRepository productWriteRepository)
    {
        _productReadRepository = productReadRepository;
        _productWriteRepository = productWriteRepository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok();
    }

    public async Task<IActionResult> Post(VmCreateProduct vmCreateProduct)
    {
        var result = await _productWriteRepository.AddAsync(new Product()
        {
            Name = vmCreateProduct.Name,
            Price = vmCreateProduct.Price,
            Stock = vmCreateProduct.Stock
        });
        await _productWriteRepository.SaveAsync();
        return Ok(HttpStatusCode.Created);
    }
}