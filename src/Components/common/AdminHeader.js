import styled from 'styled-components';
import Responsive from './Responsive';

const AdminHeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  font-size: 2rem;
  background: #E0F8F7;
  display: flex;
  align-items: center;      // 세로 정중앙
  justify-content: center;  // 가로 정중앙
  }
`;

const AdminHeader = () => {
  return (
    <div>
      <AdminHeaderBlock />
      <Wrapper>호윤안전상사주식회사 관리자 페이지</Wrapper>
    </div>
  );
};

export default AdminHeader;
