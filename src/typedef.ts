export type Global = {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
};

export type SummaryOfCountry = {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
};

export type CountryDetails = {
    ID: string;
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
    Date: string;
};

export type COVIDStatistics = {
    Global: Global;
    Countries: SummaryOfCountry[];
};

export type Country = {
    Country: string;
    Slug: string;
    ISO2: string;
};

export type URL = {
    countryName: string;
    startDate: string;
    endDate: string;
};

export enum TableHeaders {
    COUNTRY = 'Country',
    CONFIRMED = 'Confirmed',
    DEATH = 'Death',
    RECOVERED = 'Recovered',
}
