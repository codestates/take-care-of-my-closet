import styled from 'styled-components'

export const ContentForm = styled.form`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  padding: 80px 60px;
  position: relative;

  /* background-color: brown; */
  /* background-color: black; */

`

export const FieldSet = styled.fieldset`
  display: flex;
  border: 0;
  /* position: absolute; */
  /* align-items: center;
  margin: 0 auto;
  width: 1000px;
  padding: 90px 60px;
  position: relative; */
  /* position: relative; */

`

export const CreateTitle = styled.input`
  position: absolute;
  top: 1px;
  border: 0;

  font-size: 20px;
  width: 300px;
  padding: 3px 0 3px 10px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  /* background-color: aqua; */
  border-bottom: 1px solid #ccc;
  border-width: 20%;

  margin: 20px 0;
  
  ::placeholder {
    color: black;
  }
  /* background-color: transparent; */
  /* background-color: white; */
`
export const CreateTextContent = styled.textarea`
  width: 450px;
  /* height: 450px; */
  padding-left: 20px;
  padding-top: 20px;
  border: 0;
  border:  1px solid #ccc;

`


export const ImageContent = styled.div`
  width: 450px;
  height: 500px;

  margin-right: 40px;
  margin-top: -10px;
  margin-left: -15px;

  background-image: url(${props => props.src || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 15px;
  /* position: absolute; */
  /* top: 50px; */
  border: 1px solid #ccc;

  /* background-color: blueviolet; */
`

export const Section = styled.div`
`

export const CreateBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 140px;
  /* background-color: chartreuse; */
  padding: 9.5px 0;
  width: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
`

export const CancelBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 70px;
  /* background-color: chartreuse; */
  padding: 9.5px 0;
  width: 50px;
  border: 0;
  font-size: 16px;
  border-radius: 10px;
`;

export const FileAttach = styled.label`
  /* background-color: blue; */
  border: 1px solid #ccc;
 background-color: #ccc;
  position: absolute;
  bottom: 30px;
  left: 60px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`