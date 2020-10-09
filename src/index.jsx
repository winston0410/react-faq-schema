import Question from './partials/Question.jsx'

function Faq ({ faqs, attr }) {
  const faqArray = faqs.map(({
    question,
    answer
  }) =>
    <Question question={question} answer={answer} attr={attr}/>
  )

  return (
    <div itemscope="itemscope" itemtype="https://schema.org/FAQPage" {...attr.Container}>
      {faqArray}
    </div>
  )
}

export default Faq
