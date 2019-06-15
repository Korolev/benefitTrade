const sortByKey = (ascdesc) => (key) => (a, b) => {
  if (ascdesc === 'asc') {
    return a[key] < b[key] ? 1 : -1
  } else {
    return a[key] < b[key] ? -1 : 1
  }
}

export default sortByKey
