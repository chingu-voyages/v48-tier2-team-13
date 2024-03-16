export default function getFoundInCountries(dinosaursData) {
  const entries = dinosaursData.map((item) => item.foundIn);
  const flattenedArray = entries.flatMap((entry) => entry.split(","));
  const uniqueCountriesSet = new Set(
    flattenedArray.map((country) => country.trim())
  );
  const uniqueCountriesArray = Array.from(uniqueCountriesSet);

  return uniqueCountriesArray;
}
