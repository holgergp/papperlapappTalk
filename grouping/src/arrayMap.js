import "core-js/proposals/array-grouping-stage-3-2";

const watchList = [
  { format: "podcast", name: "@autoweirdfm" },
  { format: "podcast", name: "SoftwerkerCast" },
  { format: "youtube", name: "Papperlapapp" },
  { format: "youtube", name: "French Guy Cooking" }
];

export const newGroupFunction = () => {
  const grouped = watchList.group((it) => it.format);
  return grouped;
};

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );

const groupByForEach = (items) => {
  const mapped = {
    podcast: [],
    youtube: []
  };
  items.forEach((toWatch) => {
    console.log(toWatch.format);
    mapped[toWatch.format].push(toWatch);
  });
  return mapped;
};
export const oldGroupFunction = () => {
  const grouped = groupByForEach(watchList);
  return grouped;
};
