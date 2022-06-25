import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import { LaunchItem } from './LaunchItem';
import * as API from "../services/launches";

export function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches()
        .then(setLaunches) // (data) => { setLaunches(data) }
        .catch(err => console.error(err));
    }, []);
    // [] -> se va a ejecutar cuando se crea el componente. (ngInit)
    // [launches] -> llama a la función de adentro cada vez que se actualice o cambie esa variable.

    return (
        <>
            <Heading as="h1" size="lg">SpaceX Launches</Heading>
            { launches.length == 0 ? (
                <div>Loading...</div>
            ) : (
                <section>
                    {launches.map((launch) => (
                        <LaunchItem key={launch.flight_number} {...launch}/>
                    ))}
                </section>
            )}
        </>
    )
}