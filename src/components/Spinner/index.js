import { useTheme } from "styled-components";

const Spinner = () => {
  const theme = useTheme();
  return (
    <svg width="24px" height="24px" x="0px" y="0px" viewBox="0 0 48 48">
      <g>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 24 24"
          to="360 24 24"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <path
          fill={theme.color.grayLightest}
          d="M24,45C12.4,45,3,35.6,3,24S12.4,3,24,3V0l0,0C10.7,0,0,10.7,0,24c0,13.3,10.7,24,24,24V45z"
        />
        <path
          fill={theme.color.brandPrimary}
          d="M24,3c11.6,0,21,9.4,21,21s-9.4,21-21,21v3l0,0c13.3,0,24-10.7,24-24C48,10.7,37.3,0,24,0V3z"
        />
      </g>
    </svg>
  );
};

export default Spinner;
