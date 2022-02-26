const filters = {
  byAbv(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.abv)) {
        res.push(item);
      }
    });
    return (res);
  },
  byCategory(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.category)) {
        res.push(item);
      }
    });
    return (res);
  },
  byCity(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.city)) {
        res.push(item);
      }
    });
    return (res);
  },
  byCountry(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.country)) {
        res.push(item);
      }
    });
    return (res);
  },
  byIbu(data, query) {
    const res = [];
    data.forEach((item) => {
      if (new RegExp(query, 'gi').test(item.ibu)) {
        res.push(item);
      }
    });
    return (res);
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
  byCity(data, query) {
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
