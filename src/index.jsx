import React from 'react'
import Question from './partials/Question.jsx'
const {
  safeMap
} = require('../output/Helper/index.js')

const defaultAttr = {
  Container: {},
  Question: {},
  Answer: {}
}

function Faq ({ faqs = [], attr = defaultAttr }) {
  const faqArray = safeMap(
    ({
      question,
      answer
    }) =>
      <Question question={question} answer={answer} attr={attr}/>
  )(
    faqs
  )

  return (
    <div itemScope="itemscope" itemType="https://schema.org/FAQPage" {...attr.Container}>
      {faqArray}
    </div>
  )
}

export default Faq
