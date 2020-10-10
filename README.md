# React Faq Schema

[![Maintainability](https://api.codeclimate.com/v1/badges/88b504bebd67654c5ad5/maintainability)](https://codeclimate.com/github/winston0410/react-faq-schema/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/88b504bebd67654c5ad5/test_coverage)](https://codeclimate.com/github/winston0410/react-faq-schema/test_coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/9b15c595615d4a77b3f3096ff92d2313)](https://www.codacy.com/gh/winston0410/react-faq-schema/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/react-faq-schema&utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/react-faq-schema/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/react-faq-schema?targetFile=package.json)

A React component that gives you a FAQ section with Microdata markup, so that you can enjoy better SEO performance.

```javascript
//Use this as a component in your application
<Faq
  faqs={[
    {
      question: 'Hello',
      answer: 'World'
    }
  ]}
  attr={{
    Container: {
      id: 'testId',
      className: 'class0'
    },
    Question: {
      id: 'testId1',
      className: 'class1'
    },
    Answer: {
      className: 'class2'
    }
  }}
  tagName={{
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
  }}
/>
```

```html
//Result
<div id="testId1" class="class1" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/Question">

  <p itemprop="name">Hello</p>

  <div class="class2" itemprop="acceptedAnswer" itemscope="itemscope" itemtype="https://schema.org/Answer">

  <p itemprop="text">World</p>
</div>
</div>
```

## Features

- :rocket: Extremely lightweight

- :nail_care: No predefined styling for minimum component size

- :wrench: From tag name to attribute, everything is extensible

## Installation

```
npm i react-faq-schema
```

## API Reference

### `props.faqs` : Array Object

An array of objects of questions and answers. Default to `[]`. Each object should have the following properties:

#### `props.question` : String

The question of that Question.

#### `props.answer` : String

The answer of that Question.

### `props.attr` : Object

An object that contains attribute for each HTML tag.

This object has the following nested objects. Keys in these objects will be used as the attribute name and values will be used as the attribute value. You can add whatever you want.

```javascript
attr={{
  Container: {
    id: 'testId',
    className: 'class0'
  },
  Question: {
    id: 'testId1',
    className: 'class1'
  },
  Answer: {
    className: 'class2'
  }
}}
```

This will generate attribute `id` with `'test1'` as value, and `className` with `'class0'` as value.

#### `props.attr.Container` : Object

#### `props.attr.Question` : Object

#### `props.attr.QuestionText` : Object

#### `props.attr.Answer` : Object

#### `props.attr.AnswerText` : Object

### `props.tagName` : Object

An object that contains tagName for each HTML tag.

```javascript
tagName={{
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
}}
```
