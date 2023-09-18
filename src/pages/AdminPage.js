import styled from 'styled-components';
import AdminHeader from '../Components/common/AdminHeader';

// 몸통 전체
const Total = styled.div`
  text-align: center;
`;

// 관리자 페이지로 설정
const AdminPage = () => {
  return (
    <Total>
      <AdminHeader />
      <div>상담 페이지 업데이트 확인</div>
    </Total>
  );
};
export default AdminPage;
