import styled from "styled-components"

// export const NavContainer = styled.div`
//   background-color: white;
//   padding: 30px 0px 30px 0px;
//   border: 1px solid #BDBDBD;
// `

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  background-image: url(${(props) => props.src || ""});
  background-repeat: no-repeat;
  background-size: contain;
  /* background-color: bisque; */
  width: 240px;
  height: 90px;
`

export const Navigation = styled.nav`
  background-color: chartreuse;
  height: 50px;
  display: flex;
`

export const NavBtn = styled.button`
  border: 0;
  cursor: pointer;
  background-color: darkkhaki;
  height: 79px;
  font-size: 20px;
  margin-right: 40px;
`
