import styled from "styled-components";


export const Article = styled.article`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  padding: 80px 60px;
  position: relative;

  /* border: 0; */
  border: 1px solid #ccc;
  /* margin-top: 60px; */
  margin-bottom: 200px;

  /* width: 1000px; */
  /* padding: 30px; */
  /* margin: 0 auto; */
  /* border-color: orange; */
  /* background-color: orange; */

`;
export const ContentImg = styled.div`
  width: 500px;
  height: 500px;
  /* width: 500px; */
  margin-right: 40px;
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* padding: 30px; */
  /* background-color: red; */
  
`;

// export const Section = styled.div`

// `;

export const Title = styled.p`
  position: absolute;
  top: 0px;
  font-size: 20px;
  width: 300px;
  padding: 3px 0 3px 10px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-width: 20%;
`;

export const TextContent = styled.div`
  background-color: white;
  font-size: 16px;
  /* margin-top: -100px; */
  margin-bottom: 10px;
  width: 465px;
  height: 180px;
  position: absolute;
  top: 80px;
  padding: 20px 0 0 20px;
  /* margin-top: 20px; */
  border: 1px solid #ccc;
`;

export const UserMindBtn = styled.div`
  /* background-color: blueviolet; */
  position: absolute;
  top: 280px;
  /* margin-left: 10px; */
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
  /* background-color: bisque; */
  margin: 0 10px;
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

  margin-left: 20px;
  cursor: pointer;
  /* background-color: green; */
  /* background-color: transparent; */
`;

export const ModifyBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 140px;
  /* background-color: chartreuse; */
  padding: 9.5px 0;
  width: 50px;
  border: 0;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 70px;
  /* background-color: chartreuse; */
  padding: 9.5px 0;
  width: 50px;
  border: 0;
`;
