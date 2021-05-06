import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
    StyledWrapper,
    StyledFormWrapper,
    StyledFieldset,
    StyledFormGroup
} from './styles';
import { Button, Input } from '../../components';
import {
    StyledLabel,
    StyledLegend,
    StyledForm,
    StyledFormError
} from '../../styles';

const PASSWORD_MIN_LENGTH = 6;

const SIGN_IN_FIELDS = [
    {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        name: 'email',
        placeholder: 'E-mail',
        validationRuled: {
            required: 'E-mail is required'
        }
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        validationRuled: {
            required: 'Password is required',
            minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: `Password should be at least ${PASSWORD_MIN_LENGTH} characters long`
            }
        }
    }
];

export const AuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = values => console.log(values);
    const onError = errors => console.log('[errors]', errors);

    return (
        <StyledWrapper>
            <StyledFormWrapper>
                <div>Tabs</div>
                <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                    <StyledFieldset>
                        <StyledLegend>Sign In</StyledLegend>
                        {SIGN_IN_FIELDS.map(
                            ({
                                id,
                                label,
                                name,
                                validationRuled,
                                ...other
                            }) => (
                                <StyledFormGroup key={id}>
                                    <StyledLabel htmlFor={id}>
                                        {label}
                                    </StyledLabel>
                                    <Input
                                        {...register(name, validationRuled)}
                                        id={id}
                                        {...other}
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name={name}
                                        as={StyledFormError}
                                    />
                                </StyledFormGroup>
                            )
                        )}
                    </StyledFieldset>
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </StyledFormWrapper>
        </StyledWrapper>
    );
};
