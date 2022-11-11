using ETicaretAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;

namespace ETicaret.Application.Repository;

public interface IRepository<T> where T : BaseEntity
{ 
    DbSet<T> Table { get; }
}