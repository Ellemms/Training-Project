import styled from "styled-components";

const WeatherForecastHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WeatherForecastName = styled.p`
    font-size: 32px;
    color: var(--text-color);
`;

const WeatherForecastSwitch = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SwitchBtn = styled.button`
    width: 50%;
    height: 100%;
    font-size: 16px;
    border-radius: 15px;
    color: var(--text-color);
    cursor: pointer;
    margin: 0 5px;
`;

export { WeatherForecastHeader,
         WeatherForecastName,
         WeatherForecastSwitch,
         SwitchBtn }