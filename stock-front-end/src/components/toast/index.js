import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

const Container = styled.div.attrs(() => ({
  className: 'noti-bar',
}))`
  transition: all 0.3s ease-in-out 0s;
  z-index: 3000;
  position: relative;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  min-width: 108px;
  min-height: fit-content;
  height: fit-content;
  max-width: 300px;
  width: auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: rgba(51, 51, 51, 0.9);
  padding: 8px;
  @media (min-width: 768px) {
    min-width: 300px;
    padding: 32px 8px;
  }
   p {
    width: 100%;
    flex-wrap: wrap;
    word-break: break-word;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    white-space: pre-line;
    margin-bottom: 0px;
    @media (min-width: 768px) {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
    }
   }
`;

const Wrapper = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toast = () => {
  const isOpen = useStoreState((state) => state.toast.isOpen);
  const message = useStoreState((state) => state.toast.message);
  return (
    <Wrapper isOpen={isOpen}>
      <Container isOpen={isOpen}>
        <p>{message}</p>
      </Container>
    </Wrapper>
  );
};

export default Toast;
