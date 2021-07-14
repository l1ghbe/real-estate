import Image from "next/image";

function NextButton(props) {
  const { className, style, onClick, mobile, complex } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, transform: "translateY(4px)", zIndex: 1000 }}
    >
      <Image
        alt="next"
        width={mobile ? 20 : 40}
        height={mobile ? 20 : 40}
        src={
          mobile && !complex
            ? "/images/arrows/right-black.svg"
            : "/images/arrows/white-right.svg"
        }
      />
    </div>
  );
}
export default NextButton;
