import {useState} from "react";
import {handleInput} from "../../models/Utils";
import axios from "axios";

export default function Login() {

    const [userid, setUserid] = useState('');
    const [passwd, setPasswd,] = useState('');

    const handlelogin = async () => {
        const data = {userid: userid, passwd: passwd};

        let params = `?userid=${userid}&passwd=${passwd}`;
        let url = `http://localhost:3000/api/member/login${params}`;
        const res = await axios.get(url);
        const result = await res.data;

        console.log('pg login -', await result);
    };

  return (
      <main>
          <h2>로그인</h2>
          <form name="login">
              <div><label htmlFor="uid">아이디</label>
                  <input type="text" id="uid"
                     onChange={e => handleInput(setUserid, e)} /></div>
              <div><label htmlFor="pwd">비밀번호</label>
                  <input type="password" id="pwd"
                     onChange={e => handleInput(setPasswd, e)}/></div>
              <div><label></label>
                  <button type="button" onClick={handlelogin}>로그인</button>
              </div>
          </form>
      </main>
  )
}
