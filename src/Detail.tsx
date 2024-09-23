import { Title } from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
export function Detail() {
  return (
  <>
    <Title>Hello World!</Title>
    <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontHeader3Size }}>
    This is the detail page
    </span>
  </>
  )
}
