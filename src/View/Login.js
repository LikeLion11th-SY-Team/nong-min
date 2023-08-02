import { KAKAO_AUTH_URL } from "../API/KaKaoApi";

function Login(){
    return(
        <div>
            <a href={KAKAO_AUTH_URL}>
                <img src="/Image/kakao_login_medium_narrow.png" />
            </a>
        </div>
    )
}

export default Login;