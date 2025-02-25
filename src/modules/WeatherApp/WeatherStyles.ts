import styled from "styled-components";

const WeatherMainContainer = styled.div({
    width: '75%',
    height: 'calc(100vh - 70px)',
    margin: 'auto auto',
    padding: '0 25px',
    backgroundColor: 'var(--bg-color)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
});

export { WeatherMainContainer }