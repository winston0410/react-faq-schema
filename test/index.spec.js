import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import Faq from '../src/index.jsx'
require('global-jsdom')()

let rootContainer

beforeEach(function () {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(function () {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('FAQ Component Testing', function () {
  it('should not fail if no data is passed int as question', function () {
    act(() => {
      ReactDOM.render(<Faq />, rootContainer)
    })
    // const h1 = rootContainer.querySelector('h1')
    // expect(h1.textContent).to.equal('Hello World')
  })
})
