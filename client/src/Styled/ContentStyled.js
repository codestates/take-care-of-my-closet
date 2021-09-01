import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  align-items: center;
  background-color: aqua;
  margin: 0 auto;
  width: 1000px;
  /* height: 900px; */
  padding: 90px 60px;
  position: relative;

  
`;

export const ContentImg = styled.div`
  background-color: chartreuse;
  width: 500px;
  height: 500px;
  margin-right: 40px;
  /* margin: 0 40px 0 50px; */
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  /* background-size: contain; */
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px;
`;

export const Section = styled.div`
  /* padding: 80px 0; */

  background-color: blanchedalmond;
`;

export const Title = styled.p`
  position: absolute;
  top: 25px;
  background-color: blue;
  /* margin-top: 30px; */
  font-size: 20px;
  width: 300px;
  padding: 3px 0 3px 10px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  /* margin-right: 50px; */
  /* text-align: center; */

`;

export const TextContent = styled.textarea`
  background-color: white;
  font-size: 16px;
  margin-top: -40px;
  margin-bottom: 10px;
  width: 465px;
  /* margin-top: 20px; */
  resize: none;
`;

export const UserMindBtn = styled.div`
  /* background-color: blueviolet; */
  margin-left: 10px;
`;

export const UserMindBtnLike = styled.figure`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  background-color: bisque;
  /* background-color: transparent; */
`;

export const UserMindBtnDisLike = styled.figure`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
  text-align: center;

  margin-left: 40px;
  cursor: pointer;
  /* background-color: green; */
  /* background-color: transparent; */
`;

export const ModifyBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 140px;
  background-color: chartreuse;
  padding: 8.5px 0;
  width: 50px;
  border: 0;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 70px;
  background-color: chartreuse;
  padding: 8.5px 0;
  width: 50px;
  border: 0;
`;
