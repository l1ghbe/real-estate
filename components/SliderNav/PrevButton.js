import Image from "next/image";

function PrevButton(props) {
  const { className, style, onClick, mobile, complex } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, transform: "translateY(4px)" }}
    >
      <Image
        alt="prev"
        width={mobile ? 20 : 40}
        height={mobile ? 20 : 40}
        src={
          mobile && !complex
            ? "/images/arrows/left-black.svg"
            : "/images/arrows/white-left.svg"
        }
      />
    </div>
  );
}
export default PrevButton;
