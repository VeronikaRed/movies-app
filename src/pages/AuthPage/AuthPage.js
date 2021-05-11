import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    StyledWrapper,
    StyledFormWrapper,
    StyledFieldset,
    StyledFormGroup,
    StyledTabs,
    StyledTab
} from './styles';
import { Button, Input } from '../../components';
import {
    StyledLabel,
    StyledLegend,
    StyledForm,
    StyledFormError
} from '../../styles';
import { authenticateUser } from '../../store';
import { useTabs } from '../../hooks';

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

const SIGN_UP_FIELDS = [
    {
        id: 'firstName',
        label: 'First name',
        type: 'text',
        name: 'firstName',
        placeholder: 'First name',
        validationRuled: {
            required: 'First name is required'
        }
    },
    {
        id: 'lastName',
        label: 'Last name',
        type: 'text',
        name: 'lastName',
        placeholder: 'Last name',
        validationRuled: {
            required: 'Last name is required'
        }
    },
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
        id: 'ege',
        label: 'Age',
        type: 'number',
        name: 'ege',
        placeholder: 'Age',
        validationRuled: {
            required: 'Age is required'
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
    },
    {
        id: 'confirmPassword',
        label: 'Confirm password',
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm password',
        validationRuled: {
            required: 'Confirm password is required'
        }
    }
];

const {
    REACT_APP_FIREBASE_API_KEY: apiKey,
    REACT_APP_FIREBASE_AUTH_URL: authUrl
} = process.env;

const authSelector = state => !!state.auth.idToken;

export const AuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: 'george@gmail.com',
            password: '123456'
        }
    });

    const { activeTab, tabs, onSwitchTab } = useTabs();
    const isAuthentication = useSelector(authSelector);
    const dispatch = useDispatch();

    if (isAuthentication) return <Redirect to="/" />;

    const onSubmit = async values => {
        const user = {
            ...values,
            returnSecureToken: true
        };

        const mode =
            activeTab === tabs.SIGN_IN ? 'signInWithPassword' : 'signUp';

        const url = `${authUrl}${mode}?key=${apiKey}`;
        try {
            const {
                data: { idToken, localId }
            } = await axios.post(url, user);
            dispatch(authenticateUser(idToken, localId));
        } catch (e) {
            console.error(e);
        }
    };

    const onError = errors => console.log('[errors]', errors);

    const fields = activeTab === tabs.SIGN_IN ? SIGN_IN_FIELDS : SIGN_UP_FIELDS;
    const legend = activeTab === tabs.SIGN_IN ? 'Sign In' : 'Sign Up';

    return (
        <StyledWrapper>
            <StyledFormWrapper>
                <StyledTabs>
                    <StyledTab
                        $active={activeTab === tabs.SIGN_IN}
                        onClick={() => onSwitchTab(tabs.SIGN_IN)}
                    >
                        Sign In
                    </StyledTab>
                    <StyledTab
                        $active={activeTab === tabs.SIGN_UP}
                        onClick={() => onSwitchTab(tabs.SIGN_UP)}
                    >
                        Sign Up
                    </StyledTab>
                </StyledTabs>
                <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                    <StyledFieldset>
                        <StyledLegend>{legend}</StyledLegend>
                        {fields.map(
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
