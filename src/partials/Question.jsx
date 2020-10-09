import Answer from './Answer.jsx'

function Question ({ question, answer, attr }) {
  return (
    <div {...attr.Question} itemProp="mainEntity" itemScope="itemscope" itemType="https://schema.org/Question">
      <p {...attr.QuestionText} itemProp="name">
        {question}
      </p>
      <Answer answer={answer} attr={attr} />
    </div>
  )
}

export default Question
