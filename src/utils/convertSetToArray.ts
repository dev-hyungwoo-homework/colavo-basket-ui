const convertDataToIdArray = (set: Set<string>): string[] | [] => {
  const list: string[] = [];

  set.forEach((id) => {
    list.push(id);
  })

  return list;
};

export default convertDataToIdArray;
