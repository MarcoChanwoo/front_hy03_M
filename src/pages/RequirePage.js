import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';
import img07 from '../image/img07.png';
import img05 from '../image/img05.png';

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
`;

const RequirePage = () => {
  return (
    <>
      <NormalHeader />
      <TotalBox>
        <div className="mention">건설에선 언제나 안전이 최선입니다</div>
        <img className="img" src={img07} alt="img07" />
        <div className="mention">안전을 위한 완벽한 환경을 조성하는 것</div>
        <img className="img" src={img05} alt="img05" />
      </TotalBox>
    </>
  );
};
export default RequirePage;
