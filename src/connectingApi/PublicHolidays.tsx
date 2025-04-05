import { useEffect, useState } from "react";

interface Holiday {
  name: { text: string }[];
  startDate: string;
}

interface Countries {
  name: { text: string }[];
  isoCode: string;
}

export default function PublicHolidays() {
  const [country, setCountry] = useState<string>("PL");
  const [countries, setCountries] = useState<Countries[]>([]);

  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    async function getHolidays() {
      const res = await fetch(
        `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=2025-01-01&validTo=2025-04-05&languageIsoCode=en`,
      );
      const data = await res.json();
      console.log(data);
      setHolidays(data);
    }

    getHolidays();
  }, [country]);

  useEffect(() => {
    async function getAllCountries() {
      const res = await fetch(
        `https://openholidaysapi.org/Countries?languageIsoCode=en`,
      );
      const data = await res.json();
      console.log(data);
      setCountries(data);
    }

    getAllCountries();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div>
        <select
          name="countries"
          id="countries"
          className="w-82 rounded-md border border-gray-300 p-2 text-gray-900"
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((country, index) => {
            return (
              <option key={index} value={country.isoCode}>
                {country.name[0].text}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          {holidays.map((holiday, index) => {
            return (
              <div key={index} className="text-2xl text-black">
                {holiday.name[0].text} - {holiday.startDate}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
