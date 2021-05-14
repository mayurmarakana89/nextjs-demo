// Test cases
// 0. matches snapshot
// 1. should render the component
// 2. should verify that the image component is rendered properly
// 3. should verify that product name as expected

import React from "react";
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from "@testing-library/react";
import ProductCard from "./";

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

const stubProduct = {
    name: "test product",
    default_image_urls: {
        main_image_url: "https://cdn.mec.ca/medias/sys_master/fallback/fallback/8917710503966/5056608-STA00-fallback.jpg"
    }
};

afterEach(cleanup);

describe("ProductCard", () => {
    it('matches snapshot', () => {
        const tree = renderer
          .create(<ProductCard product={stubProduct} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    it("should render the component", () => {
        render(<ProductCard  product={stubProduct} />);
        expect(screen.getByTestId(`product-${stubProduct.name}`)).toBeInTheDocument();
    });

    it("should verify that the image component is rendered properly", () => {
        render(<ProductCard  product={stubProduct} />);
        const imgComponent = screen.getByAltText("alt-text");
        expect(imgComponent).toBeInTheDocument();
    });

    it("should verify that product name as expected", () => {
        render(<ProductCard  product={stubProduct} />);
        const nameComponent = screen.getByText("test product");
        expect(nameComponent).toBeInTheDocument();
    });
});