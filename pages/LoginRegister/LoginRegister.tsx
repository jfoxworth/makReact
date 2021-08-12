/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/

// Standard React items
import { FC, ReactElement, useState} from 'react';

// Components
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import FaIcon from '../../src/components/FaIcon/FaIcon';
import Image from 'next/image';



const Login:FC = ():ReactElement => {

  const [showLogin, setShowLogin] = useState(true);

  const handleClick = () => {
    setShowLogin(!showLogin);
  }


  return(
    
    <div className="shop-wrapper">

      <div id="shop-authentication" className="section">

        <div className="container">

            <div className="columns account-header is-auth">
                <div className="column main-column is-tablet-landscape-padded">

                    <div className="auth-title">
                        { showLogin && <h2 id="auth-main-title">LOGIN</h2> }
                        { !showLogin && <h2 id="auth-main-title">REGISTER</h2> }
                        <Image className="brand-filigrane" layout={"fill"} src={"/mak-studio-ball-offset.png"} alt="Mak Studio" />
                    </div>

                    <div className="auth-toggler">
                        <input type="checkbox" onClick={handleClick} />
                        <div className="toggler-track">
                            <div className="hexagon-wrap">
                                <div className="hexagon">
                                    <FaIcon icon={"User"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>

            { showLogin && <LoginForm /> }
            { !showLogin && < RegisterForm /> }

        </div>

      </div>

    </div>

  )

}



export default Login