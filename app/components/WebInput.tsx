import React from "react";
import { InputProps } from "../interfaces/Interfaces";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { WebColor } from "../utlis/WebColor";

const WebInput: React.FC<InputProps> = ({
    label,
    labelRightIconText,
    innerTopTextStatus,
    innerTopText,
    leftInnerIcon,
    leftInnerIconStatus,
    rightInnerIcon,
    togglePasswordVisibility,
    isSecure = false,
    onChangeText,
    multiline = false,
    value,
    rightSideText,
    rightSideTextValue,
    textBelowInput,
    onPresstextBelowInput,
    placeholderText,
    error,
    classNameInput,
    InputDivStyle,
    className = "",
}) => {
    const [isPasswordVisible, setPasswordVisible] = React.useState(isSecure);

    const handleToggleSecureEntry = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={`w-full ${className}`}>
            <div className="flex justify-between items-center mb-1">
                {label && <label className="text-white text-base font-inter text-md font-medium">{label}</label>}
                {labelRightIconText && (
                    <div className="flex items-center gap-2 text-yellow-500">
                        <i className="icon-group-1906 text-xl" />
                        <span className="text-sm">Add more</span>
                    </div>
                )}
            </div>

            <div
                className={`flex items-center bg-gray-50 bg-transparent rounded-lg border border-solid border-white px-3 py-2 ${classNameInput} ${innerTopTextStatus ? "flex-col items-start gap-0 h-16 justify-center" : ""
                    }`}
                style={InputDivStyle}
            >
                {innerTopTextStatus && (
                    <p className="text-sm text-gray-500">{innerTopText || "Name on Card"}</p>
                )}
                <div className="flex items-center w-full">
                    {leftInnerIcon ||
                        (leftInnerIconStatus && <i className="icon-mail-outline text-gray-400 text-lg mr-2" />)}
                    <input
                        type={isSecure && !isPasswordVisible ? "password" : "text"}
                        value={value}
                        onChange={(e) => onChangeText && onChangeText(e.target.value)}
                        placeholder={placeholderText}
                        className={`flex-1  border-0 font-inter text-white placeholder:text-white text-sm outline-none ${multiline ? "h-auto" : ""
                            }`}
                    />
                    {togglePasswordVisibility && (
                        <button
                            type="button"
                            onClick={handleToggleSecureEntry}
                            className="bg-transparent border-none justify-center pt-2 items-center text-lg focus:outline-none"
                        >
                            {isPasswordVisible ? (
                                <AiOutlineEyeInvisible size={23} color={WebColor.greenColor} />
                            ) : (
                                <AiOutlineEye size={23} color={WebColor.greenColor} />
                            )}
                        </button>
                    )}
                    {rightSideText && (
                        <p className="text-sm text-gray-500">{rightSideTextValue}</p>
                    )}
                    {rightInnerIcon && <div className="ml-2">{rightInnerIcon}</div>}
                </div>
            </div>
            {textBelowInput && (
                <p
                    onClick={onPresstextBelowInput}
                    className="text-sm mt-3 text-right font-inter cursor-pointer underline"
                    style={{ color: WebColor.whiteColor }}
                >
                    Forgot Password?
                </p>
            )}
            {error && <p className="text-red-500 font-inter font-medium text-xs mt-1">{error}</p>}
        </div>
    );
};

export default WebInput;
