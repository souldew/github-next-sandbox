import { render } from "@testing-library/react";
import { SampleComponent } from "./SampleComponent";

describe("Sample", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<SampleComponent />);
  });
});
