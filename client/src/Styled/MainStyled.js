import styled from "styled-components";

export const MainUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  /* margin: 10px 0; */
  background: linear-gradient(to right bottom, #f4f4f4, #ecd6a7, #70e1f5);
  /* background: linear-gradient(to right bottom, #ffd194, #70e1f5); */
  margin: 0;
`;

export const MainArticle = styled.article`
  background: white;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  border-radius: 15px 15px;
  margin: 90px 30px;

  /* padding: 0 25px; */
  width: 350px;
  box-shadow: 10px, 10px, 5px, grey;
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
  /*border-bottom: 1px solid #ccc;*/

  /* background-color: orange; */
  font-size: 15px;
  /* text-align: center; */
  color: black;
  white-space: nowrap;
  overflow: hidden;
  background-color: transparent;
`;
