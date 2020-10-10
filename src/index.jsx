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

const defaultTag = {
  Container: {
    tagName: 'div'
  },
  Question: {
    tagName: 'div'
  },
  QuestionText: {
    tagName: 'p'
  },
  Answer: {
    tagName: 'div'
  },
  AnswerText: {
    tagName: 'p'
  }
}

function Faq ({ faqs = [], attr = defaultAttr, tagName = defaultTag }) {
  const faqArray = safeMap(
    ({
      question,
      answer
    }) =>
      <Question question={question} answer={answer} attr={attr} tagName={tagName} key={question}/>
  )(
    faqs
  )

  const TagName = tagName.Container.tagName

  return (
    <TagName itemScope="itemscope" itemType="https://schema.org/FAQPage" {...attr.Container}>
      {faqArray}
    </TagName>
  )
}

export default Faq
