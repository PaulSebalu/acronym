const matchStr = (str, queryset) => {
  const queryStr = str.replace(/ +(?= )/g, '');
  const regEx = new RegExp(queryStr, 'gi');

  const matches = [];
  queryset.forEach((acronym) => {
    if (acronym.acronym.match(regEx) || acronym.definition.match(regEx))
      matches.push(acronym);
  });
  return matches;
};

export default matchStr;
