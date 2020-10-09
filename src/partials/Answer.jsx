function Answer ({ answer, attr }) {
  return (
    <div {...attr.Answer} itemprop="acceptedAnswer" itemscope="itemscope" itemtype="https://schema.org/Answer">

      <div {...attr.AnswerText} itemprop="text">
        {answer}
      </div>

    </div>
  )
}

export default Answer
