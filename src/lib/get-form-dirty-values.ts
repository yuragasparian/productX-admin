
function getDirtyValues(dirtyFields: any, allValues: any) {
    if (dirtyFields === true) return allValues;

    const result: any = {};

    for (const key in dirtyFields) {
      if (dirtyFields[key] === true) {
        result[key] = allValues[key];
      } 
    }

    return result;
  }

  export default getDirtyValues