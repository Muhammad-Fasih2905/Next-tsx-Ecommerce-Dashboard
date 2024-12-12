import { ReactNode } from "react";


export interface InputProps {
    label?: string;
    labelRightIconText?: boolean;
    innerTopTextStatus?: boolean;
    innerTopText?: string;
    leftInnerIcon?: React.ReactNode;
    leftInnerIconStatus?: boolean;
    rightInnerIcon?: React.ReactNode;
    togglePasswordVisibility?: boolean;
    isSecure?: boolean;
    onChangeText?: (value: string) => void;
    multiline?: boolean;
    value?: string;
    placeholderText?: string;
    rightSideText?: boolean;
    rightSideTextValue?: string;
    textBelowInput?: boolean;
    onPresstextBelowInput?: () => void;
    error?: string;
    className?: string;
    classNameInput?: string;
    InputDivStyle?: React.CSSProperties
}

export interface AppButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
    titleClassName?: string;
    LeftIcon?: React.ReactNode;
    leftIconClassName?: string;
    RightIcon?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    loaderClassName?: string;
    loadingLabel?: string;
    rightIconClassName?: string;
    style?: React.CSSProperties
    type?: any
}
export interface LoginFormData {
    email: string;
    password: string;
}
