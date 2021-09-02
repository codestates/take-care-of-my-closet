import styled from "styled-components";

export const MainUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  background-color: green;
`;

export const MainArticle = styled.article`

  background-color: blueviolet;
  border-radius: 15px;
  border: 1px solid #BDBDBD;
  border-radius: 15px 15px ;
  margin: 90px 30px;


  /* padding: 0 25px; */
  width: 350px;
`;

export const MainImg = styled.div`
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  background-color: chartreuse;
`;

export const MainP = styled.p`
  margin: 0;
  padding: 15px;

  /* background-color: orange; */
  border-radius: 15px 15px;
  font-size: 15px;
  /* text-align: center; */
  color: white;
  white-space: nowrap;
  overflow: hidden;
`;
