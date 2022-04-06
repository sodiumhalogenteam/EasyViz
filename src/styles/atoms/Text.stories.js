import React from "react";

export default {
  title: "Atoms/Text",
};

export const Headings = () => (
  <>
    <h1>Heading #1</h1>
    <h2>Heading #2</h2>
    <h3>Heading #3</h3>
    <h4>Heading #4</h4>
    <h5>Heading #5</h5>
    <h6>Heading #6</h6>
  </>
);

export const Paragraph = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin
    pretium dui eu cursus. Maecenas ultrices justo vitae augue egestas, vitae
    mattis dolor tristique. Cras ut mauris in urna lobortis mollis ut eu nunc.
    Sed suscipit risus sed mauris tempus, vitae placerat purus fringilla. Etiam
    ultrices tincidunt justo, sit amet dignissim nulla rhoncus non. Vestibulum
    aliquam ante vel ipsum dapibus, eu ultricies orci aliquet. Phasellus eget
    elementum lorem. In hac habitasse platea dictumst.
  </p>
);

export const InlineElements = () => (
  <>
    <p>
      <a href="#">This is a text link</a>
    </p>

    <p>
      <strong>Strong is used to indicate strong importance</strong>
    </p>

    <p>
      <em>This text has added emphasis</em>
    </p>

    <p>
      The <b>b element</b> is stylistically different text from normal text,
      without any special importance
    </p>

    <p>
      The <i>i element</i> is text that is set off from the normal text
    </p>

    <p>
      The <u>u element</u> is text with an unarticulated, though explicitly
      rendered, non-textual annotation
    </p>

    <p>
      <del>This text is deleted</del> and <ins>This text is inserted</ins>
    </p>

    <p>
      <s>This text has a strikethrough</s>
    </p>

    <p>
      Superscript<sup>®</sup>
    </p>

    <p>
      Subscript for things like H<sub>2</sub>O
    </p>

    <p>
      <small>This small text is small for for fine print, etc.</small>
    </p>

    <p>
      Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
    </p>

    <p>
      Keybord input: <kbd>Cmd</kbd>
    </p>

    <p>
      <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
        This text is a short inline quotation
      </q>
    </p>

    <p>
      <cite>This is a citation</cite>
    </p>
    <p>
      The <dfn>dfn element</dfn> indicates a definition.
    </p>

    <p>
      The <mark>mark element</mark> indicates a highlight
    </p>

    <p>
      <code>This is what inline code looks like.</code>
    </p>

    <p>
      <samp>This is sample output from a computer program</samp>
    </p>

    <p>
      The <var>variable element</var>, such as <var>x</var> = <var>y</var>
    </p>
  </>
);
