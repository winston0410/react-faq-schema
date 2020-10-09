import Answer from './Answer.jsx'

function Question ({ question, answer, attr }) {
  return (
    <div {...attr.Question} itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/Question">
      <p {...attr.QuestionText} itemprop="name">
        {question}
      </p>
      <Answer answer={answer} attr={attr} />
    </div>
  )
}

export default Question
