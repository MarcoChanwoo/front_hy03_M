import styled from 'styled-components';
import NormalHeader from '../Components/common/NormalHeader';

const HelloBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f2e0f7;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GuestPast = () => {
  return (
    <div>
      <NormalHeader />
      <HelloBox>안전한 현장의 시발점!</HelloBox>
    </div>
  );
};
export default GuestPast;
