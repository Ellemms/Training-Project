import styled from "styled-components";

const WeatherCityContainer = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const CityName = styled.p`
    font-size: 40px;
    color: var(--text-color);
`;

const CurrentDate = styled.p`
    font-size: 24px;
    color: var(--text-color);
`;

export { WeatherCityContainer, CityName, CurrentDate }