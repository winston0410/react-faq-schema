function Answer ({ answer, attr, tagName }) {
  const TagName = tagName.Answer.tagName
  const TextTagName = tagName.AnswerText.tagName

  return (
    <TagName {...attr.Answer} itemProp="acceptedAnswer" itemScope="itemscope" itemType="https://schema.org/Answer">

      <TextTagName {...attr.AnswerText} itemProp="text">
        {answer}
      </TextTagName>

    </TagName>
  )
}

export default Answer
