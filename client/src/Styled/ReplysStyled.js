import styled from "styled-components";


export const ReplysSection = styled.section`
  /* position: relative; */
`;
export const ReplysUl = styled.ul`
  width: 470px;
  height: 200px;
  /* background-color: red; */
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 30px;
  overflow-y: auto;
  overflow-wrap: break-word;
  /* overflow-overflow-x */
  /* position: absolute;
  top: 0; */
  position: relative;
  top: 110px;
`

export const ReplyLi = styled.li`
  position: relative;
  background-color: beige;
  /* margin-bottom: 7px; */
  /* padding-top: 10px; */
  width: 420px;
  position: relative;
  /* margin-top: -10px; */
  white-space: pre-wrap;
  /* width: 300px; */
`;

export const ReplyTextContent = styled.input`
  font-size: 16px;
  width: 350px;
  padding: 5px;

  margin-left: 10px;
  border: 0;
`;

export const CreateReplyBox = styled.div`
  display: flex;
  /* background-color: blue; */
  position: absolute;
  bottom: 60px;
  width: 480px;
  justify-content: space-between;

  /* margin-top: 60px; */

`;

export const ReplyBtn = styled.button`
  background-color: chartreuse;
  padding: 8.5px 0;
  width: 50px;
  border: 0;

  /* margin-left: 20px; */
`;

export const ReplyDeleteBtn = styled.button`
  background-color: transparent;
  padding: 5px 0;
  width: 20px;
  height: 20px;
  top: 0px;
  border: 0;
  background-image: url(${(props) => props.src || ""});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 0px;
  margin-top: -13%;
  cursor: pointer;
`;

export const ReplyP = styled.p``;

