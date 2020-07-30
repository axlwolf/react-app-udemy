import React, {Component} from 'react';

const useConditionlRendering = (showA) => showA ? <ComponentA /> : <ComponentB />;

export default class ConditionalSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: false,
            isUserLogged: false
        };
    }
    render() {
        const { showA, isUserLogged } = this.state;
        const conditionalComponent = useConditionlRendering(showA);
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {
                    /* {conditionalComponent} */
                    isUserLogged ? <LogOutSection /> : <LoginButton />
                }
            </div>
        )
    }
};

const ComponentA = () => <p>ComponentA</p>;
const ComponentB= () => <p>ComponentB</p>;

const LoginButton = () => <button>Login</button>;
const LogOutSection = () => {
    return (
        <div>
            <p>
                Welcome, User
            </p>
            <button>Logout</button>
        </div>
    )
};
  