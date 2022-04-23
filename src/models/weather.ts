/**
 * @title Weather
 * @description Weather Information at a given station
 */
export interface Weather {
    /**
     * Weather Conditions
     */
    conditions: {
        /**
         * Observing Station
         */
        icao: string;

        /**
         * Time the Weather Observation was made
         */
        timeOfObservation: Date;

        /**
         * Wind Direction
         */
        windDirection: number;

        /**
         * Wind Speed in Meters Per Second
         */
        windSpeed: number;

        /**
         * Prevailing Visibility in Meters
         */
        prevailingVisibility: number;

        /**
         * Temperature in Celsius
         */
        temperature: number;

        /**
         * Dew Point in Celsius
         */
        dewpoint: number;

        clouds?: {
            /**
             * Okta rating of the cloud
             * SKC = Sky clear (0 oktas);
             * FEW = Few (1 to 2 oktas);
             * SCT = Scattered (3 to 4 oktas);
             * BKN = Broken (5 to 7 oktas);
             * OVC = Overcast (8 oktas);
             */
            okta: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            altitude: number;
        }[];
    };
}