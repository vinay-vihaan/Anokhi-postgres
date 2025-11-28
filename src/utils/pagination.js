const paginate = (query, page, limit) => {
    const offset = (page - 1) * limit;
    return {
        ...query,
        limit: limit,
        offset: offset,
    };
};

const getPagination = (page, limit) => {
    const currentPage = page ? +page : 1;
    const pageLimit = limit ? +limit : 10;
    return { currentPage, pageLimit };
};

const getPagingData = (data, currentPage, pageLimit) => {
    const { count: totalItems, rows: items } = data;
    const totalPages = Math.ceil(totalItems / pageLimit);
    return { totalItems, items, totalPages, currentPage };
};

module.exports = {
    paginate,
    getPagination,
    getPagingData,
};