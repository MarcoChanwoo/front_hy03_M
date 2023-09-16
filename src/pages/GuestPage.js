import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';
import img10 from '../image/img10.png';
import img11 from '../image/img11.png';

const Total = styled.div`
  text-align: center;
  .img {
    width: 800px;
    height: 100%;
  }
`;

const HelloBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f2e0f7;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GuestPast = () => {
  return (
    <Total>
      <div className="total">
        <NormalHeader />
        <img className="img" src={img10} alt="img10" />
        <HelloBox>건설사고... 아직도 발생하고 있습니다</HelloBox>
        <img className="img" src={img11} alt="img11" />
        <HelloBox>국내 건설현장 사망사고.. 영국의 10배!!</HelloBox>
        <HelloBox>이제 없어져야만 합니다!</HelloBox>
      </div>
    </Total>
  );
};
export default GuestPast;
