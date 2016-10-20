export default () =>
  (collection, params) =>
    collection.filter(item =>
    item.tag === (
      params.filter === 'none' ? item.tag : params.filter
    ))