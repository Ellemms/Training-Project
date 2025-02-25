import styled from "styled-components";

const WeatherSearchContainer = styled.div`
    width: 25vw;
    height: 12.5%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
const WeatherSearchButton = styled.button`
    width: 45px;
    height: 40px;
    border-radius: 35px 0 0 35px;
    position: relative;
    background-color: var(--header-search-btn-bg);
    border: var(--header-search-border-width) solid rgba(33, 33, 33, 0.5);
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 10px;
        min-height: 10px;
        border-radius: 50%;
        border: 1px solid var(--header-search-circle-bg);
        transition: .3s;
    }
    &::after {
        content: '';
        position: absolute;
        top: 69.5%;
        left: 57.5%;
        min-width: 7.5px;
        min-height: 1px;
        transform: rotate(45deg);
        background-color: var(--header-search-circle-bg);
        transition: .3s;
    }
`
const WeatherSearchinput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 0 35px 35px 0;
    color: var(--text-color);
    padding: 0 15px;
    font-size: 0.9rem;
    background-color: var(--bg-color);
    border: var(--header-search-border-width) solid rgba(33, 33, 33, 0.5);
    color: var(--text-color);
    transition: 0.3s;
    &::placeholder {
        color: var(--header-search-place-color);
    }
`

export { WeatherSearchContainer, WeatherSearchinput, WeatherSearchButton }