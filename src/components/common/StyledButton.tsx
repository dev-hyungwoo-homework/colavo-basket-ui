import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  width?: number;
  height?: number;
  fontColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
};

type ButtonProps = {
  width: number;
  height: number;
  fontColor: string;
  backgroundColor: string;
  hoverColor: string;
};

export default function StyledButton({
  text,
  onClick,
  type = "button",
  width = 80,
  height = 40,
  fontColor = "#ffffff",
  backgroundColor = "#ab96ff",
  hoverColor = "#b6a6f4",
}: Props): React.ReactElement {
  return (
    <Button
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {text}
    </Button>
  );
}

const Button = styled.button<ButtonProps>`
  min-width: ${(props): number => props.width}px;
  min-height: ${(props): number => props.height}px;
  padding: 14px;
  border-radius: 10px;
  background-color: ${(props): string => props.backgroundColor};
  font-size: 15px;
  font-weight: 700;
  color: ${(props): string => props.fontColor};
  box-shadow: 0px 0px 1px 1px #dfd8d8;
  cursor: pointer;

  :hover {
    background-color: ${(props): string => props.hoverColor};
  }
`;
