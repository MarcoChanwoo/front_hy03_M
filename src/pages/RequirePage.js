import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';
import img07 from '../image/img07.png';

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
        <div className="mention">안전 설계를 도와 드립니다</div>
        <img className="img" src={img07} alt="img07" />
      </TotalBox>
    </>
  );
};
export default RequirePage;
