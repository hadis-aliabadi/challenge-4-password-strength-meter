import React, {Component} from "react";
import zxcvbn from "zxcvbn";
import Bar from "../Components/Bar";
import Input from "../Components/Input";
class Password extends Component {

    constructor() {
        super();
        this.state = {
          password: '',
        }
      }
    render() {
        const {password}=this.state;
        const { strength } = this.props;
        const result = zxcvbn(password);
        return (
            <div id={'container'}>
                <Input value={password} type="password" onChange={e => this.setState({ password: e.target.value })}/>
                <Bar bgColor={strength[result.score].bgColor} height={4} width={result.score*175}/>
                {!password?<p>Enter your password</p>:<p>{strength[result.score].text}</p>}
                <p>{password && result.feedback.suggestions}</p>
            </div>
            
        )
    }


}

export default Password;