function dijkstra(graph, startNode, endNode) {
  const distance = {};
  const visited = {};
  const previous = {};
  const nodes = Object.keys(graph);
  const queue = [...nodes];

  nodes.forEach((node) => {
    distance[node] = node === startNode ? 0 : Infinity;
    visited[node] = false;
    previous[node] = null;
  });

  while (queue.length > 0) {
    queue.sort((a, b) => distance[a] - distance[b]);
    const currentNode = queue.shift();

    if (currentNode === endNode) {
      return {
        distance: distance[endNode],
        path: constructPath(previous, startNode, endNode),
      };
    }

    if (distance[currentNode] === Infinity) {
      break; // Unreachable nodes
    }

    visited[currentNode] = true;

    for (const neighborWeightPair of graph[currentNode]) {
      const [neighbor, weight] = neighborWeightPair.split(":");
      if (!visited[neighbor]) {
        const tentativeDistance = distance[currentNode] + parseInt(weight);

        if (tentativeDistance < distance[neighbor]) {
          distance[neighbor] = tentativeDistance;
          previous[neighbor] = currentNode;
        }
      }
    }
  }

  return { distance: Infinity, path: [] };
}

function constructPath(previous, startNode, endNode) {
  const path = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return path;
}

module.exports = {
  dijkstra,
  constructPath,
};
