const FlexContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        background: "gray",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
