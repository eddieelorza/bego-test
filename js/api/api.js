const URL_BASE = 'https://bego-d1f12-default-rtdb.firebaseio.com/result';


//getOrders
const getOrders = async (orderId) => {
  const response = await fetch(`${URL_BASE}/${orderId}.json`);
  const data = await response.json();
  return data;
}

//getUpcomingOrders
const getUpcomingOrders = async () => {
    const response = await fetch(`${URL_BASE}.json`);
    const data = await response.json();
    return data;
}

export {getUpcomingOrders, getOrders};