export const search = (str, q) => {
  if (!str || !q) {
    return {
      found: false,
      data: [
        {
          id: "0, -1",
          type: "default",
          value: str
        }
      ]
    };
  }

  const result = [];
  const addToResult = (t, s, from, to) => {
    result.push({
      id: `${from},${to}`,
      type: t,
      value: s.slice(from, to)
    });
  };

  let lastIndex = -1;
  let prevIndex = 0;
  while (
    (lastIndex = str.toLowerCase().indexOf(q.toLowerCase(), lastIndex + 1)) !==
    -1
  ) {
    if (lastIndex !== prevIndex) {
      addToResult("default", str, prevIndex, lastIndex);
    }
    addToResult("found", str, lastIndex, lastIndex + q.length);
    prevIndex = lastIndex + q.length;
  }
  if (prevIndex !== str.length) {
    addToResult("default", str, prevIndex, str.length);
  }
  return {
    found: prevIndex !== 0,
    data: result
  };
};
