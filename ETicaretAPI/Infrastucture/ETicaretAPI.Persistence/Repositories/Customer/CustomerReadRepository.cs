using ETicaret.Application.Repository;
using ETicaretAPI.Domain.Entities;
using ETicaretAPI.Persistence.Contexts;

namespace ETicaretAPI.Persistence.Repositories;

public class CustomerReadRepository : ReadRepository<Customer>, ICustomerReadRepository
{
    /* Burada sadece interface implement etseydik, metotlari yeniden implement etmemiz gerekirdi.
       O zaman neden interface implement ettik dersen, IOC container icerisinden bu classi almamiz icin lazim.
       ReadRepository ile zaten interface metotlari implement ettigimizi dusunecektir.
    */
    public CustomerReadRepository(ETicaretApiDbContext context) : base(context)
    {
    }
}