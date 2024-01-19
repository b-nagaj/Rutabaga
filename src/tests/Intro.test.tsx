// unit testing for the Intro component

import {describe, expect, test} from "vitest"
import {render, screen} from '@testing-library/react'

import Intro from "../components/Intro/Intro"

describe("Intro", () => {
    test("title & subtitle should be renderd", () => {
        
        render(<Intro title='Test title' subtitle="Test subtitle"></Intro>);

        expect(screen.getByText(/Test title/i)).toBeDefined()
        expect(screen.getByText(/Test title/i)).toBeDefined()
    })
})
