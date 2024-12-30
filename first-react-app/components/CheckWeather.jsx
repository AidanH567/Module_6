// Child component - receives parent state handler via props
export function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];
  // generates new random weather data and updates state via prop

  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);

    // ++ try to destructure this function from the props object
    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };

  return <button onClick={randomWeather}>Check Weather</button>;
}

// ++ Add some more weather types of your own
// Child component to display and convert temp if neede
// d
export function Temperature({ temp, units = "C" }) {
  // default to celcius
  // convert to Fahrenheit if units is F (or not C)

  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;
  return (
    <span class="Temperature">
      <strong>
        {" "}
        {parseInt(displayTemp)}&deg;{units}{" "}
      </strong>
    </span>
  );
}
