import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';
import img10 from '../image/img10.png';
import img11 from '../image/img11.png';
import img02 from '../image/img02.png';
import img03 from '../image/img03.png';
import Button from '../Components/common/Button';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Total = styled.div`
  text-align: center;
  .img {
    width: 800px;
    height: 100%;
  }
  .footer {
    padding-top: 50px;
    padding-bottom: 150px;
    font-size: 2rem;
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
        <img className="img" src={img02} alt="img02" />
        <HelloBox>꼼꼼한 안전설계부터 실시간 확인까지</HelloBox>
        <img className="img" src={img03} alt="img03" />
        <HelloBox>호윤상사에서 함께 설계를 진행해 드립니다!</HelloBox>
        <div className="footer">
          문의를 남겨주시면 함께 상담해 드립니다
          <br />
          <Button>
            <Link to="/require">문의 페이지로</Link>
          </Button>
        </div>
      </div>
    </Total>
  );
};
export default GuestPast;
