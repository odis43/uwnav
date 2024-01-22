const getLowestCost = (costs, visited) => {
  const nodes = Object.keys(costs);

  const lowestCostNode = nodes.reduce((lowest, node) => {
    if (lowest === null && !visited.includes(node)) {
      lowest = node;
    }
    if (costs[node] < costs[lowest] && !visited.includes(node)) {
      lowest = node;
    }
    return lowest;
  }, null);

  return lowestCostNode;
};

export default function shortestPath(graph, start, finish) {
  const nodes = Object.keys(graph);
  const costs = {};
  for (const node of nodes) {
    if (node == start) {
      costs[node] = 0;
    } else {
      costs[node] = Infinity;
    }
  }

  const parentNodes = { finish: null };
  for (let child in graph[start]) {
    parentNodes[child] = start;
    costs[child] = graph[start][child];
  }

  const visited = [start];

  let node = start;

  while (node) {
    const nodeCost = costs[node];
    const childNodes = graph[node];

    for (let child in childNodes) {
      if (visited.includes(child)) {
        continue;
      }
      let childCost = childNodes[child];
      let costFromStartToChild = nodeCost + childCost;

      if (costs[child] > costFromStartToChild) {
        costs[child] = costFromStartToChild;
        parentNodes[child] = node;
      }
    }
    visited.push(node);
    node = getLowestCost(costs, visited);
  }

  const path = [finish];
  let parentNode = parentNodes[finish];

  while (parentNode) {
    path.push(parentNode);
    parentNode = parentNodes[parentNode];
  }
  path.reverse();

  return path;
}
