import React from 'react';
import './Register.scss';
import Modal from '../../components/common/modal/modal';

class Register extends React.PureComponent{
    state = {
        startRegister: true
    }

    togleModal = () => {
        this.setState({startRegister: !this.state.startRegister});
    }
    render(){
        const { startRegister } = this.state;
        return (
            <div className="register">
                

                <Modal show={startRegister} close={this.togleModal} showIcon>
                    <div>Siema</div>
                </Modal>
            </div>
        );
    }
}

export default Register;