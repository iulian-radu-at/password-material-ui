import * as React from 'react';
import {isEmpty, isNil} from 'lodash';
import PasswordField from './PasswordField';
import RemoveValue from './RemoveValue';
import SeeHidePassword from './SeeHidePassword';

class PasswordMaterialUi extends React.Component<PasswordMaterialUiProps, PasswordMaterialUiState> {
    public state: PasswordMaterialUiState = {
        isPasswordVisible: false
    };

    public render() {
        const {id, label, placeholder, value} = this.props;

        return (
            <PasswordField
                id={id}
                type={this.getType()}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
                startAdornment={this.getStartAdornament()}
                endAdornment={this.getEndAdornament()}
            />
        );
    }

    private getType(): string {
        const {type} = this.props;

        if(isNil(type)){
            return 'text';
        }

        if (type !== 'password') {
            return type;
        }

        return this.state.isPasswordVisible ? 'text' : 'password';
    }

    private getStartAdornament() {
        if (this.props.type !== 'password') {
            return null;
        }

        return (
            <SeeHidePassword
                isPasswordVisible={this.state.isPasswordVisible}
                onClick={this.handleHidePassword}
            />
        );
    }

    private getEndAdornament() {
        if (isEmpty(this.props.value)) {
            return null;
        }

        return <RemoveValue onClick={this.handleRemoveValue}/>;
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value);
    };

    private handleRemoveValue = () => {
        this.props.onChange('');
    };

    private handleSeePassword = () => this.setState({
        isPasswordVisible: true
    });

    private handleHidePassword = () => this.setState({
        isPasswordVisible: false
    });
}

interface PasswordMaterialUiState {
    isPasswordVisible: boolean;
}

export interface PasswordMaterialUiProps {
    id?: string;
    type?: string;
    label: string;
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
};

export default PasswordMaterialUi;
