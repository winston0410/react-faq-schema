import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Faq from '../src/index.jsx'
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
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
    ReactDOM.render(<Faq />, rootContainer)

    const renderedBlock = rootContainer.querySelector('div')

    expect(renderedBlock).to.have.attribute('itemtype', 'https://schema.org/FAQPage')
    expect(renderedBlock).to.have.attribute('itemscope', '')
  })
})
