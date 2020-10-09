function Answer ({ answer, attr }) {
  return (
    <div {...attr.Answer} itemProp="acceptedAnswer" itemScope="itemscope" itemType="https://schema.org/Answer">

      <div {...attr.AnswerText} itemProp="text">
        {answer}
      </div>

    </div>
  )
}

export default Answer
