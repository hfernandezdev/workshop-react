import { useState, useEffect } from 'react';
import { LaunchItem } from './components/LaunchItem'
import { Heading, Image } from '@chakra-ui/react';
import * as API from "./services/launches";
import logo from './assets/logo-spacex.png';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches); // (data) => { setLaunches(data) }
  }, []);
  // [] -> se va a ejecutar cuando se crea el componente. (ngInit)
  // [launches] -> llama a la función de adentro cada vez que se actualice o cambie esa variable.

  return (
    <>
    <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="lg">SpaceX Launches</Heading>
      <ul>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
    </>
  );
}
