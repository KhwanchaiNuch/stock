import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-mobile{
    display: flex;
  }
  .container-wrapper-section-form{
    width: 100%;
    height: calc(100vh - 60px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 400px) {
      height: 568px;
    }
  }
  .error-box-message{
    border-radius: 10px;
    border: 1px solid #FF2B56;
    background-color: #FF2B56;
    padding: 24px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 36px;
      height: 36px;
    }
    p{
      margin-top: 10px;
      color: #FFF;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.4px;
    }
  }
  .button-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #2BA6E1;
    height: 72px;
    width: 100%;
    padding: 16px 28px;
    .btn-submit{
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        color: #FFFFFF;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.4px;
      }
    }
  }
`
