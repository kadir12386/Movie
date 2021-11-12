export function ColorBox({ clr }) {
  const color_box_styles = {
    backgroundColor: clr,
    height: "130px",
    width: "130px",
    margin: "20px 4px",
  };
  return <div style={color_box_styles}></div>;
}
