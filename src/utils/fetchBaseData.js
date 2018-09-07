async function fetchBaseData() {
  let bulbasaur = {};
  await fetch("https://swapi.co/api/people/1/").then(
    response => (bulbasaur = response.json())
  );
  return bulbasaur;
}

export default fetchBaseData;
