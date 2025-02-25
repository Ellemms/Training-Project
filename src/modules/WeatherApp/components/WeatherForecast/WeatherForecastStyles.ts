import styled from "styled-components";

const WeatherForecastContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const WeatherForecastName = styled.p`
    font-size: 32px;
    color: var(--text-color);
`;

const WeatherForecastScroll = styled.div`
    margin: 10px 0 0 0;
    width: 100%;
    height: 215px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar{
        height: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--scroll-thumb-bg);
        border-radius: 50px;
    }
`;

const WeatherForecastStep = styled.div`
    min-width: 125px;
    height: 150px;
    font-size: 16px;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--us-li-select-li-bg);
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
`;

const WeatherForecastDate = styled.p`font-size: 18px;`;
const WeatherForecastHours = styled.p`font-size: 18px;`;
const WeatherForecastImg = styled.img`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const WeatherForecastTemp = styled.p`font-size: 20px`;

export { WeatherForecastContainer,
         WeatherForecastName,
         WeatherForecastScroll,
         WeatherForecastStep,
         WeatherForecastDate,
         WeatherForecastHours,
         WeatherForecastImg,
         WeatherForecastTemp }