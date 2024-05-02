import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white text-gray-700",
  },
};
const sizes = {
  sm: "h-[48px] pl-[15px] pr-[30px] text-base",
  xs: "h-[48px] pl-[15px] pr-[30px] text-base",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#ffffff",
              color: state.isSelected && "#0a033c",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#0a033c",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);

// SelectBox.propTypes = {
//   className: PropTypes.string,
//   options: PropTypes.array,
//   isSearchable: PropTypes.bool,
//   isMulti: PropTypes.bool,
//   onChange: PropTypes.func,
//   value: PropTypes.string,
//   indicator: PropTypes.node,
//   shape: PropTypes.oneOf(["round"]),
//   size: PropTypes.oneOf(["sm", "xs"]),
//   variant: PropTypes.oneOf(["fill"]),
//   //color: PropTypes.oneOf(["white_A700"]),
// };

export { SelectBox };
