import Question from './partials/Question.jsx'
const {
  safeMap
} = require('../output/Helper/index.js')

console.log(safeMap)

console.log(
  safeMap(n => n * n)([1, 2, 3])
)

function Faq ({ faqs, attr }) {
  const faqArray = safeMap(
    ({
      question,
      answer
    }) =>
      <Question question={question} answer={answer} attr={attr}/>
  )(
    faqs
  )

  // faqs.map(({
  //   question,
  //   answer
  // }) =>
  //   <Question question={question} answer={answer} attr={attr}/>
  // )
  // const faqArray = safeMap([1, 2, 3])(n => n * n)

  return (
    <div itemscope="itemscope" itemtype="https://schema.org/FAQPage" {...attr.Container}>
      {faqArray}
    </div>
  )
}

export default Faq
