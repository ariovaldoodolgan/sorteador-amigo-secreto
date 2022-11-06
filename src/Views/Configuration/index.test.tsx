import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuration from ".";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {

    return {
        useNavigate: () => mockNavigate
    }
})

describe('Configuration page', () => {

    test('Should be rendered correctly', () => {
        const { container } = render(
            <RecoilRoot>
                <Configuration />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})