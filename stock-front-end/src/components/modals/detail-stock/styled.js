import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  max-height: 600px;
  overflow-x: scroll;
  h1{
    color: #002D63;
    text-align: left;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.4px;
    margin-bottom: 16px;
  }
  .area-section{
    border-radius: 8px;
    background: #F5F6F7;
    padding: 8px;
    margin-bottom: 28px;
    .items-area{
      padding: 8px;
      display: absolute;
      flex-direction: row;
      .item{
        width: 20%;
        color: #5B6A83;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.4px;
        text-align: center;
        padding: 8px;
        &.stock{
          margin-left: auto;
          color: #002D63;
          text-align: right;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.4px;
        }
      }
    }
  }
  .receipt-amount{
    margin-bottom: 8px;
    width: 100%;
    p{
      color: #5B6A83;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.4px;
    }
  }
  .receipt-item-wrapper{
    display: flex;
    width: 100%;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    background: #F5F6F7;
    .receipt-item{
      margin-bottom: 3px;
      display: flex;
      width: 100%;
      flex-direction: row;
      border-bottom: solid 1px #DFE6EC;
      padding: 8px 0px;
      &:last-child{
        border-bottom: none;
      }
      img{
        width: 10px;
        margin-left: 13px;
        object-fit: contain;
        cursor: pointer;
      }
      p{
        color: #5B6A83;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.4px;
      }
      span{
        color: #2BA6E1;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.4px;
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
`
