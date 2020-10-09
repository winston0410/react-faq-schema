import Question from './partials/Question.jsx'
const {
  safeMap
} = require('../output/Helper/index.js')

function Faq ({ faqs = [], attr }) {
  console.log(faqs)

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
    <div itemscope="itemscope" itemtype="https://schema.org/FAQPage" {...attr.Container}>
      {faqArray}
    </div>
  )
}

export default Faq
