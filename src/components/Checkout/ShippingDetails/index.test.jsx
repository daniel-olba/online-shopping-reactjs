import React from "react";
import { mount } from "enzyme";

import renderer from "react-test-renderer";

import ContextsMock from "../../../common/all-contexts-mock";

import ShippingDetails from "./index";

// const checkoutMock = {
//     values: {
//         shippingData: {
//             firstName: "John",
//             lastName: "Doe",
//             email: "johndoe@gmail.com",
//             phone: "1234567890",
//             address: "Address test",
//             postal: "1234-567",
//             shippingCountry: "Country X",
//         },
//         shippingDetailsSaved: false,
//     },
//     actions: {},
//     saveShippingDetails: jest.fn().mockImplementation(),
// };

describe("ShippingDetails component unit testing", () => {
    function baseXML() {
        return ContextsMock({
            component: <ShippingDetails />,
            // checkoutContextValue: checkoutState,
        });
    }

    const tree = renderer.create(baseXML()).toJSON();

    it("matches snapshot", () => {
        expect(tree).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(tree).toBeTruthy();
    });

    it("should render six Typography components and one button when shippingDetailsSaved is false", () => {
        const wrapper = mount(baseXML());
        // 1 H6 Typography variant
        expect(wrapper.find("h6")).toHaveLength(1);
        // 5 paragraph Typography variant
        expect(wrapper.find("p")).toHaveLength(5);
        // 1 button since shippingDetailsSaved is false
        expect(wrapper.find("button")).toHaveLength(1);
    });

    // it("should render seven Typography components and one icon when shippingDetailsSaved is true", () => {
    //     const wrapper = mount(
    //         baseXML({
    //             values: {
    //                 ...checkoutMock.values,
    //                 shippingDetailsSaved: true,
    //             },
    //         })
    //     );
    //     console.log('debug: ', wrapper.debug());
    //     // 1 H6 Typography variant
    //     expect(wrapper.find("h6")).toHaveLength(1);
    //     // 5 paragraph Typography variant
    //     expect(wrapper.find("p")).toHaveLength(5);
    //     // 1 button since shippingDetailsSaved is false
    //     // expect(wrapper.find('button')).toHaveLength(1);
    // });
});
