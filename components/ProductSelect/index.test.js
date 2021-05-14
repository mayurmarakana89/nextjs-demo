// Test cases
// 0. matches snapshot
// 1. should render the component
// 2. should verify that the list is populated by default to all
// 3. should verify that when user enters a keyword, the list is filtered by "contains"
// 4. should verify that when user enters something gibberish that doesn't match, the list should be empty

import React from "react";
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from "@testing-library/react";
import ProductSelect from "./";

jest.mock("next/config", () => {
    return () => ({
        images: {
            domains: ['cdn.mec.ca'],
        },
    });
});

jest.mock("next/image", () => {
    return () => <img alt="alt-text"></img>;
});

const stubProducts = [
    {
        name: "test product",
        default_image_urls: {
            main_image_url: "https://cdn.mec.ca/medias/sys_master/fallback/fallback/8917710503966/5056608-STA00-fallback.jpg"
        }
    },
    {
        name: "demo product",
        default_image_urls: {
            main_image_url: "https://cdn.mec.ca/medias/sys_master/fallback/fallback/8917710503966/5056608-STA00-fallback.jpg"
        }
    }
]

afterEach(cleanup);

describe("ProductSelect", () => {
    it('matches snapshot', () => {
        const tree = renderer
          .create(<ProductSelect products={stubProducts} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    it("should render the component", () => {
        render(<ProductSelect products={stubProducts} />);
        expect(screen.getByTestId("product-select")).toBeInTheDocument();
    });

});