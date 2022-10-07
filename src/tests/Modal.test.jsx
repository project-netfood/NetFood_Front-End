import { Main } from "../components/Main"
import { render } from '@testing-library/react'
import React from 'react'


test('exemple', function () {
    render(<Main title="hello"><div id="demo"></div></Main>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
})