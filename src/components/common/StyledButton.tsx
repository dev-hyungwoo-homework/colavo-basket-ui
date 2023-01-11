import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

export default function StyledButton({
  text,
  onClick,
  type = "button",
}: ButtonProps): JSX.Element {
  return (
    <Button onClick={onClick} type={type}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #ab96ff;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0px 0px 1px 1px #dfd8d8;
  cursor: pointer;

  :hover {
    background-color: #c1b4f4;
  }
`;
