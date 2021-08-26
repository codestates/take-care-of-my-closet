import React, { useState } from "react"
import axios from "axios"
// import logo from '';

function SignUp() {
  const [idValue, setIdValue] = useState("")
  const [pwValue, setPwValue] = useState("")

  const inputIdHandler = (e) => {
    setIdValue(e.target.value)
    console.log(idValue)
  }

  const isDuplicated = (id) => {
    // 중복확인 api 요청 함수
    // axios.post('', {
    // })
    // .then(result => {
    //   console.log(result)
    //   if () { // 만약 중복된 아이디라면
    //     // 사용할 수 없는 아이디 입니다.
    //   }
    //   else { // 중복되지 않았다면
    //     // 사용할 수 있는 아이디 입니다.
    //   }
    // })
  }

  return (
    <div>
      <h1>img</h1>
      <h2>회원가입</h2>
      <form>
        <fieldset>
          아이디 :{" "}
          <input
            type="text"
            onChange={(e) => inputIdHandler(e)}
            value={idValue}
            placeholder="아이디를 입력하세요"
          />
          <button onClick={isDuplicated}>중복확인</button>
          <br />
          비밀번호 :{" "}
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <br />
          비밀번호 확인 : <input type="password" placeholder="비밀번호 확인" />
          <br />
          프로필 사진 첨부 : <input type="file" />
          <br />
          닉네임 : <input type="text" placeholder="닉네임을 입력하세요" />
          <br />
          <button>가입하기</button>
        </fieldset>
      </form>
    </div>
  )
}

export default SignUp
