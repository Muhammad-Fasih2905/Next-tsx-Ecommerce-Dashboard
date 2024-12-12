import React from "react";
import { TailSpin } from "react-loader-spinner";
import { AppButtonProps } from "../interfaces/Interfaces";
import { WebColor } from "../utlis/WebColor";


const WebButton: React.FC<AppButtonProps> = ({
    title,
    onClick,
    className = "",
    titleClassName = "",
    LeftIcon,
    leftIconClassName = "",
    RightIcon,
    rightIconClassName = "",
    disabled = false,
    loading = false,
    loaderClassName = "",
    style,
    type
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer ${disabled
                ? "opacity-50 cursor-pointer"
                : `hover:bg-${WebColor.purpleColor} transition duration-200`
                } ${className}`}
            style={{
                ...(disabled ? {} : { backgroundColor: WebColor.purpleColor }),
                ...style,
            }}
            type={type}
        >
            {!loading && LeftIcon && (
                <span className={`flex items-center ${leftIconClassName}`}>{LeftIcon}</span>
            )}

            {loading ? (
                <div
                    className={`flex items-center justify-center gap-2 ${loaderClassName}`}
                >
                    <TailSpin
                        height="20"
                        width="20"
                        color="white"
                        ariaLabel="loading-spinner"
                    />
                </div>
            ) : (
                <span className={`font-medium ${titleClassName}`}>{title}</span>
            )}

            {!loading && RightIcon && (
                <span className={`flex items-center ${rightIconClassName}`}>{RightIcon}</span>
            )}
        </button>
    );
};

export default WebButton;
