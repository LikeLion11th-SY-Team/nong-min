function SignUp(){
  return(
    <div>
        <form>
          <input placeholder="아이디 입력(6-20자)"></input>
          <input placeholder="비밀번호 입력(문자, 숫자 포함 8-20자"></input>
          <input placeholder="비밀번호 재입력"></input>
          <div>
            <input placeholder="닉네임 입력"></input>
            <button>중복 확인</button>
          </div>
          <input placeholder="이름 입력"></input>
          <input placeholder="전화번호 입력('-'제외 11자리"></input>
          <div>
            <input placeholder="이메일 입력"></input>
            <input placeholder="(직접 입력)"></input>
          </div>
          <input placeholder="주 농작물을 선택해 주세요"></input>
          <button>가입하기</button>
        </form>
    </div>
  )
}

export default SignUp;