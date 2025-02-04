const getViews = async (id: string, increment = 1) => {
  const res = await fetch(`/api/views?id=${id}&increment=${increment}`);
  const data = await res.json();
  return data;
};

export { getViews };
