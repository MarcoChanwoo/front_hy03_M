import styled from 'styled-components';
import Header from '../Components/common/Header';
import img01 from '../image/img01.png';
import img12 from '../image/img12.png';
import img06 from '../image/img06.png';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const TotalBox = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 100px;
  .img {
    width: 800px;
  }
  .mention {
    padding: 50px;
  }
  .admin {
    font-size: 1rem;
    text-decoration: underline;
    text-align: right;
    margin-right: 50px;
  }
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <TotalBox>
        <div>
          <div className="mention">저희 호윤안전상사 주식회사에서는</div>
          <img className="img" src={img01} alt="img01" />
          <div className="mention">
            건설 현장의 새로운 안전 패러다임을 제시합니다
          </div>
          <img className="img" src={img06} alt="img06" />
          <div className="mention">
            근로자와 사업주 그리고 이용자 모두가 웃을 수 있도록
          </div>
          <img className="img" src={img12} alt="img12" />
          <div className="mention">(주)호윤안전상사가 함께합니다.</div>
        </div>
        <div className="admin">
          <Link to="/admin">Admin</Link>
        </div>
      </TotalBox>
    </>
  );
};
export default MainPage;
