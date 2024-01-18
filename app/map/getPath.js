export default async function getPath(nodeA, nodeB) {
  const url = "http://localhost:3000/api/test";

  const data = {
    nodeA: nodeA,
    nodeB: nodeB,
  };

  const params = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, params);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
