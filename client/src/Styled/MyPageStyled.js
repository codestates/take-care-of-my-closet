import styled from 'styled-components'

export const MyPageForm = styled.form`
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  width: 1000px;
  margin: 0 auto;
  padding: 50px 60px;
  position: relative;

  /* background-color: brown; */
  /* background-color: black; */

`

export const MyPageFieldSet = styled.fieldset`
display:  flex;
align-items: center;
justify-content: space-around;
border: 0;
/* height: 400px; */
/* background-color: green; */
position: relative;
padding: 0;
margin: 0;
`

export const ModiProfileBox = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
/* background-color: blueviolet; */
`


export const ModiProfile = styled.div`
  width: 400px;
  height: 300px;

  /* margin-right: 40px;
  margin-top: -10px;
  margin-left: -15px; */

  background-image: url(${props => props.src || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* padding: 15px; */
  /* position: absolute; */
  /* top: 50px; */
  border: 1px solid #ccc;
  /* background-color: blueviolet; */
`


export const MyPageAttach = styled.label`
  background-color: blue;
  /* justify-content: flex-start; */
  /* position: absolute;
  bottom: 30px;
  left: 60px; */
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  width: 100px;
`


export const UserIdInfo = styled.p`
  background-color: aqua;
  width: 300px;
  height: 15px;
  padding: 10px 0 10px 10px;
  position: absolute;
  top: 0;
  margin: 0;
`

export const ModiPassword = styled.input`
background-color: aqua;
  width: 300px;
  padding: 10px 0 10px 10px;
  border: 0;
  position: absolute;
  top: 60px;

`

export const ModiPasswordValidation = styled.input`
background-color: aqua;
  width: 300px;
  padding: 10px 0 10px 10px;
  border: 0;
  position: absolute;
  top: 120px;

`

export const ModiNickNameValidation = styled.div`
  display: flex;
  justify-content: row;
  /* background-color: beige; */
  /* position: absolute;
   top: 180px; */
  margin-top: 50px;


`
export const ModiNickName = styled.input`
  background-color: aqua;
  width: 300px;
  padding: 10px 0 10px 10px;
  border: 0;
 
`

export const ModiUserInfoSave = styled.button`
background-color: aqua;
/* position: absolute;
left: ; */
margin-left: 50px;
margin-top: 60px;
width: 80px;
height: 50px;
border: 0;
font-size: 16px;
border-radius: 10px;
`
