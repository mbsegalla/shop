import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",
  alignItems: "stretch",
  maxWidth: 1180,
  margin: '0 auto',
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: "calc(656px - 0.5rem)",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  }
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    fontSize: "$2xl",
    marginTop: "1rem",
    display: "block",
    color: "$green300",
  },

  p: {
    fontSize: "$md",
    marginTop: "2.5rem",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: "none",
    color: "$white",
    borderRadius: 8,
    cursor: "pointer",
    padding: "1.125rem",
    fontSize: "$md",

    "&:hover": {
      backgroundColor: "$green300",
    }
  }
});