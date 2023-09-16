import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';
import img07 from '../image/img07.png';
import img05 from '../image/img05.png';
import img12 from '../image/img12.png';
import Button from '../Components/common/Button';

const TotalBox = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 200px;
  .img {
    width: 800px;
  }
  .mention {
    padding: 50px;
  }
  .text {
    width: 500px;
    height: 50px;
  }
`;

const RequirePage = () => {
  const onClick = () => {
    alert('접수되었습니다. 신속하게 확인 후 연락드리겠습니다.');
  };
  return (
    <>
      <NormalHeader />
      <TotalBox>
        <div className="mention">건설에선 언제나 안전이 최선입니다</div>
        <img className="img" src={img07} alt="img07" />
        <div className="mention">근로자를 위한 완벽한 환경을 조성하는 것</div>
        <img className="img" src={img05} alt="img05" />
        <div className="mention">
          그것이 저희 (주)호연안전상사의 마지막 목표입니다
        </div>
        <img className="img" src={img12} alt="img12" />
        <div className="mention">
          무엇이든 물어보세요! 성심성의껏 컨설팅해 드립니다
        </div>
        <textarea
          className="text"
          placeholder="회사명 / 담당자 성함 / 이메일 주소 / 현장 위치"
        ></textarea>
        <br />
        <Button to="/" onClick={onClick}>
          상담 요청하기
        </Button>
      </TotalBox>
    </>
  );
};
export default RequirePage;
