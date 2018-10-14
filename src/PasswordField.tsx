import * as React from 'react';
import {isEmpty} from 'lodash';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';

const getType = (type?: string): string => isEmpty(type) ? 'text' : type as string;

const getLabel = (id?: string, label?: string) => {
    if (isEmpty(label)) {
        return null;
    }

    return <InputLabel htmlFor={id}>{label}</InputLabel>;
};

const getHelperText = (helperText: React.ReactNode) => {
    if (isEmpty(helperText)) {
        return null;
    }

    return <FormHelperText>{helperText}</FormHelperText>;
};

const PasswordField = (props: PasswordFieldProps) => (
    <FormControl fullWidth={true}>
        {getLabel(props.id, props.label)}
        <Input
            id={props.id}
            type={getType(props.type)}
            placeholder={props.placeholder}
            value={props.value}
            onFocus={props.onGotFocus}
            onBlur={props.onLostFocus}
            onChange={props.onChange}
            startAdornment={props.startAdornment}
            endAdornment={props.endAdornment}
        />
        {getHelperText(props.helperText)}
    </FormControl>
);

export interface PasswordFieldProps {
    id?: string;
    type: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onGotFocus?: () => void;
    onLostFocus?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    helperText?: string;
}

export default PasswordField;
