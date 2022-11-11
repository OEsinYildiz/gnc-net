using ETicaretAPI.Domain.Entities.Common;

namespace ETicaret.Application.Repository;

public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
{
    Task<bool> AddAsync(T model);
    Task<bool> AddRangeAsync(List<T> model);
    bool Remove(T model);
    Task<bool> Remove(string id);
    bool RemoveRange(List<T> model);
    bool Update(T model);

    Task<int> SaveAsync();
}