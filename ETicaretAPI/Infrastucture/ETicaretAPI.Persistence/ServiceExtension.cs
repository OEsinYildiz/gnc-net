using ETicaret.Application.Repository;
using ETicaretAPI.Persistence.Contexts;
using ETicaretAPI.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ETicaretAPI.Persistence;

public static class ServiceExtension
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection service)
    {
        service.AddDbContext<ETicaretApiDbContext>(options
            => options.UseNpgsql(Configuration.ConnectionString));

        service.AddScoped<ICustomerReadRepository, CustomerReadRepository>();
        service.AddScoped<ICustomerWriteRepository, CustomerWriteRepository>();
        service.AddScoped<IProductReadRepository, ProductReadRepository>();
        service.AddScoped<IProductWriteRepository,ProductWriteRepository>();
        service.AddScoped<IOrderReadRepository, OrderReadRepository>();
        service.AddScoped<IOrderWriteRepository,OrderWriteRepository>();
  
        
        return service;
    }
}