const URL = process.env.REACT_APP_DATABASE_URL;

export async function getPopulations() {
  const url = `${URL}/api/v1/populations`;
  const res = await fetch(url);
  const data = await res.json();
  console.log('POPULATION FETCH', data);
  return data;
};

export async function getPopsByState(abrv) {
  const url = `${URL}/api/v1/populations/${abrv}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log('FETCH POPULATION BY STATE', data);
  return data;
}