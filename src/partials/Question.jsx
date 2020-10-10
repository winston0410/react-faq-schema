import React from 'react'
import Answer from './Answer.jsx'

function Question ({ question, answer, attr, tagName }) {
  const TagName = tagName.Question.tagName
  const TextTagName = tagName.QuestionText.tagName

  return (
    <TagName {...attr.Question} itemProp="mainEntity" itemScope="itemscope" itemType="https://schema.org/Question">
      <TextTagName {...attr.QuestionText} itemProp="name">
        {question}
      </TextTagName>
      <Answer answer={answer} attr={attr} tagName={tagName}/>
    </TagName>
  )
}

export default Question
