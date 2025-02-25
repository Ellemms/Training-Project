import styled from "styled-components";

const CurrentDataContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-color);
`;

const TempCloudsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Temperature = styled.p`
    font-size: 100px;
`;

const CloudCover = styled.p`
    font-size: 32px;
`;

const OtherDataContainer = styled.div`
    width: 50%;
    height: 75%;
    background-color: var(--us-li-select-li-bg);
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const OtherDataBlock = styled.div`
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OtherDataValue = styled.p`
    font-size: 32px;
`;

const OtherDataName = styled.p`
    font-size: 24px;
`;
export { CurrentDataContainer,
         TempCloudsContainer,
         Temperature,
         CloudCover,
         OtherDataContainer,
         OtherDataBlock,
         OtherDataValue,
         OtherDataName }