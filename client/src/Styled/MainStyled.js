import styled from "styled-components";

export const MainUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  /* margin-bottom:100px ; */
  /* justify-content: space-around; */
  justify-content: space-between;
  /* width: 1400px; */
  /* height: 100%; */
  width: 1300px;
  /* background-color: blanchedalmond; */
`;

export const MainArticle = styled.article`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
  background-color: blueviolet;
  border-radius: 15px;
  border: 0;
  /* padding: 0 30px; */
  margin: 90px 40px;
`;

export const MainImg = styled.div`
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 400px;
  background-color: chartreuse;
`;

export const MainP = styled.p`
  margin: 0;
  padding: 15px;

  font-size: 15px;
  /* text-align: center; */
  color: white;
  white-space: nowrap;
  overflow: hidden;
`;
