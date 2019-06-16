import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Helpers */
  .tr {text-align: right}
  .tl {text-align: left}
  .tc {text-align: center}
  .tj {text-align: justify}
  .m-0 {margin: 0;}
  .mt-0 {margin-top: 0;}
  .mb-0 {margin-bottom: 0;}
  .w-100 {width: 100%;}
  .w-auto {width: auto;}
  .h-100 {height: 100%;}
  .h-auto {height: auto;}
  .flex{
    display: flex;
  }
  .all-center{
    align-items: center;
    justify-content: center;
  }
  .no-decoration{
    text-decoration: none;
  }

  /* Common Font Size */
  .fs-22 {
    font-size: 22px;
  }
  .fs-16 {
    font-size: 16px;
  }
  .fs-14 {
    font-size: 14px;
  }

  .form {
    width: 100%;
  }

  .form-control {
    margin: 10px 0;
  }


  .main-link{
    color: #2196f3;
    opacity: 0.5;

    &.active{
      opacity: 1;
      font-weight: bold;
    }

    &:hover{
      text-decoration: none;
    }
  }

  
`

export default GlobalStyle
