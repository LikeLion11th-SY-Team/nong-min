import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../API/KaKaoApi";

function Login(){
    return(
        <div>
          

            <form>
                <input placeholder="아이디"></input>
                <input placeholder="비밀번호"></input>
                <label>
                    <input
                        type="checkbox"
                    />
                </label>
                <button>로그인</button>
            </form>
            
            <div>
                <Link to={'/signup'}>회원가입</Link>
                <Link to={'/find'}>아이디/비밀번호 찾기</Link>
            </div>

            <a href={KAKAO_AUTH_URL}>
                <img src="/Image/kakao_login_medium_narrow.png" alt="카카오 로그인 이미지"/>
            </a>
        </div>
    )
}

export default Login;