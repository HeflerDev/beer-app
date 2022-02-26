const filters = {
  byAbv(params) {

  },
  byAdress(params) {

  },
  byCategory(params) {

  },
  byCity(params) {

  },
  byCountry(params) {

  },
  byIbu(params) {

  },
  byName(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.name)) {
        res.push(item);
      }
    });
    return (res);
  },
  byCity(params) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.city)) {
        res.push(item);
      }
    });
    return (res);
  },
};

export default filters;
