import styled from "styled-components"

// export const NavContainer = styled.div`
//   background-color: white;
//   padding: 30px 0px 30px 0px;
//   border: 1px solid #BDBDBD;
// `

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  /* background-color: orange; */

  padding: 0 90px;
`

export const Logo = styled.div`
  background-image: url(${(props) => props.src || ""});
  background-repeat: no-repeat;
  background-size: contain;
  /* background-color: bisque; */
  margin-top:10px;
  width: 150px;
  height: 60px;
`

export const Navigation = styled.nav`
  /* background-color: chartreuse; */
  margin-top: -5px;

  height: 50px;
  display: flex;
  margin-right: 50px;
  position: relative;
  width: 300px;
`;

export const NavBtn = styled.button`
  border: 0;
  cursor: pointer;
  color: rgb(85, 83, 83);
  background-color: transparent;
  /* background-color: darkkhaki; */
  height: 79px;
  font-size: 20px;
  margin-right: 40px;
`
