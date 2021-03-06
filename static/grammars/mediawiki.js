mediawiki = rr.Parser({
  'list-blockquote1': rr.Node('blockquote1', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal(': '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-blockquote2': rr.Node('blockquote2', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal(':: '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-blockquote3': rr.Node('blockquote3', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('::: '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-blockquote4': rr.Node('blockquote4', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal(':::: '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-blockquote5': rr.Node('blockquote5', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('::::: '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-def': rr.Node('def', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal(';'),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-h2': rr.Node('h2', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('== '),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(' =='),
      rr.EndOfLine())),
  'list-h3': rr.Node('h3', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('=== '),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(' ==='),
      rr.EndOfLine())),
  'list-h4': rr.Node('h4', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('==== '),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(' ===='),
      rr.EndOfLine())),
  'list-h5': rr.Node('h5', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('===== '),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(' ====='),
      rr.EndOfLine())),
  'list-h6': rr.Node('h6', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('====== '),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(' ======'),
      rr.EndOfLine())),
  'list-hr': rr.Node('hr', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('----'),
      rr.EndOfLine())),
  'list-olli1': rr.Node('olli1', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('# '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-olli2': rr.Node('olli2', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('## '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-olli3': rr.Node('olli3', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('### '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-pre': rr.Node('preline', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal(' '),
      rr.SingleLineText(),
      rr.Insert('\n'),
      rr.EndOfLine())),
  'list-ulli1': rr.Node('ulli1', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('* '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-ulli2': rr.Node('ulli2', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('** '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),
  'list-ulli3': rr.Node('ulli3', rr.Sequence(
      rr.StartOfLine(),
      rr.Literal('*** '),
      rr.Ref('singleline-wikichunk'),
      rr.EndOfLine())),

  'multiline-a': rr.Node('a', rr.Sequence(
      rr.Literal('[['),
      rr.Node('href', rr.SingleLineText()),
      rr.Literal('|'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal(']]'))),
  'multiline-b': rr.Node('b', rr.Sequence(
      rr.Literal("'''"),
      rr.Ref('multiline-wikichunk'),
      rr.Literal("'''"))),
  'multiline-bi': rr.Node('bi', rr.Sequence(
      rr.Literal("'''''"),
      rr.Ref('multiline-wikichunk'),
      rr.Literal("'''''"))),
  'multiline-blockquote': rr.Node('blockquote', rr.Sequence(
      rr.Literal('<blockquote>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</blockquote>'))),
  'multiline-code': rr.Node('code', rr.Sequence(
      rr.Literal('<code>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</code>'))),
  'multiline-comment': rr.Hidden(rr.Sequence(
      rr.Literal('<!-- '),
      rr.MultiLineText(),
      rr.Literal(' -->'))),
  'multiline-del1': rr.Node('del', rr.Sequence(
      rr.Literal('<del>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</del>'))),
  'multiline-del2': rr.Node('del', rr.Sequence(
      rr.Literal('<strike>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</strike>'))),
  'multiline-i': rr.Node('i', rr.Sequence(
      rr.Literal("''"),
      rr.Ref('multiline-wikichunk'),
      rr.Literal("''"))),
  'multiline-figure': rr.Node('figure', rr.Sequence(
      rr.Literal('[[File:'),
      rr.Node('src', rr.SingleLineText()),
      rr.ZeroOrMore(rr.Sequence(
          rr.Literal('|'),
          rr.Node('option', rr.SingleLineText()))),
      rr.Literal('|'),
      rr.Node('figcaption', rr.Ref('multiline-wikichunk')),
      rr.Literal(']]'))),
  'multiline-nowiki': rr.Sequence(
      rr.Literal('<nowiki>'),
      rr.MultiLineText(),
      rr.Literal('</nowiki>')),
  'multiline-pre': rr.Node('pre', rr.Sequence(
      rr.Literal('<pre>'),
      rr.MultiLineText(),
      rr.Literal('</pre>'))),
  'multiline-tt': rr.Node('tt', rr.Sequence(
      rr.Literal('<tt>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</tt>'))),
  'multiline-u1': rr.Node('u', rr.Sequence(
      rr.Literal('<u>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</u>'))),
  'multiline-u2': rr.Node('u', rr.Sequence(
      rr.Literal('<ins>'),
      rr.Ref('multiline-wikichunk'),
      rr.Literal('</ins>'))),

  'singleline-a': rr.Node('a', rr.Sequence(
      rr.Literal('[['),
      rr.Node('href', rr.SingleLineText()),
      rr.Literal('|'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal(']]'))),
  'singleline-b': rr.Node('b', rr.Sequence(
      rr.Literal("'''"),
      rr.Ref('singleline-wikichunk'),
      rr.Literal("'''"))),
  'singleline-bi': rr.Node('bi', rr.Sequence(
      rr.Literal("'''''"),
      rr.Ref('singleline-wikichunk'),
      rr.Literal("'''''"))),
  'singleline-code': rr.Node('code', rr.Sequence(
      rr.Literal('<code>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</code>'))),
  'singleline-comment': rr.Hidden(rr.Sequence(
      rr.Literal('<!-- '),
      rr.SingleLineText(),
      rr.Literal(' -->'))),
  'singleline-del1': rr.Node('del', rr.Sequence(
      rr.Literal('<del>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</del>'))),
  'singleline-del2': rr.Node('del', rr.Sequence(
      rr.Literal('<strike>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</strike>'))),
  'singleline-i': rr.Node('i', rr.Sequence(
      rr.Literal("''"),
      rr.Ref('singleline-wikichunk'),
      rr.Literal("''"))),
  'singleline-nowiki': rr.Sequence(
      rr.Literal('<nowiki>'),
      rr.MultiLineText(),
      rr.Literal('</nowiki>')),
  'singleline-pre': rr.Node('pre', rr.Sequence(
      rr.Literal('<pre>'),
      rr.SingleLineText(),
      rr.Literal('</pre>'))),
  'singleline-tt': rr.Node('tt', rr.Sequence(
      rr.Literal('<tt>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</tt>'))),
  'singleline-u1': rr.Node('u', rr.Sequence(
      rr.Literal('<u>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</u>'))),
  'singleline-u2': rr.Node('u', rr.Sequence(
      rr.Literal('<ins>'),
      rr.Ref('singleline-wikichunk'),
      rr.Literal('</ins>'))),

  'special-nowikisingle': rr.Literal('<nowiki/>'),

  'multiline-wikichunk': rr.ZeroOrMore(rr.Or(
      rr.Ref('list-blockquote1'),
      rr.Ref('list-blockquote2'),
      rr.Ref('list-blockquote3'),
      rr.Ref('list-blockquote4'),
      rr.Ref('list-blockquote5'),
      rr.Ref('list-def'),
      rr.Ref('list-h2'),
      rr.Ref('list-h3'),
      rr.Ref('list-h4'),
      rr.Ref('list-h5'),
      rr.Ref('list-h6'),
      rr.Ref('list-hr'),
      rr.Ref('list-olli1'),
      rr.Ref('list-olli2'),
      rr.Ref('list-olli3'),
      rr.Ref('list-pre'),
      rr.Ref('list-ulli1'),
      rr.Ref('list-ulli2'),
      rr.Ref('list-ulli3'),

      rr.Ref('multiline-figure'),
      rr.Ref('multiline-a'),
      rr.Ref('multiline-bi'),
      rr.Ref('multiline-b'),
      rr.Ref('multiline-blockquote'),
      rr.Ref('multiline-code'),
      rr.Ref('multiline-comment'),
      rr.Ref('multiline-del1'),
      rr.Ref('multiline-del2'),
      rr.Ref('multiline-i'),
      rr.Ref('multiline-nowiki'),
      rr.Ref('multiline-pre'),
      rr.Ref('multiline-tt'),
      rr.Ref('multiline-u1'),
      rr.Ref('multiline-u2'),

      rr.Ref('special-nowikisingle'),

      rr.MultiLineText())),

  'singleline-wikichunk': rr.ZeroOrMore(rr.Or(
      rr.Ref('singleline-a'),
      rr.Ref('singleline-bi'),
      rr.Ref('singleline-b'),
      rr.Ref('singleline-code'),
      rr.Ref('singleline-comment'),
      rr.Ref('singleline-del1'),
      rr.Ref('singleline-del2'),
      rr.Ref('singleline-i'),
      rr.Ref('singleline-nowiki'),
      rr.Ref('singleline-pre'),
      rr.Ref('singleline-tt'),
      rr.Ref('singleline-u1'),
      rr.Ref('singleline-u2'),

      rr.Ref('special-nowikisingle'),

      rr.SingleLineText())),

  'paragraph': rr.Node('p', rr.Sequence(
      rr.Ref('multiline-wikichunk'),
      rr.Or(
          rr.Sequence(rr.EndOfLine(), rr.Literal('\n')),
          rr.EndOfText()))),

  'main': rr.Node('wikidoc', rr.Sequence(
      rr.ZeroOrMore(rr.Ref('paragraph')),
      rr.EndOfText()))
}, [
  rr.SplitElementAndNest('bi', ['b', 'i']),
  rr.GroupSiblings('ul', ['ulli1', 'ulli2', 'ulli3']),
  rr.GroupSiblings('ul', ['ulli2', 'ulli3']),
  rr.GroupSiblings('ul', ['ulli3']),
  rr.RenameElement('ulli1', 'li'),
  rr.RenameElement('ulli2', 'li'),
  rr.RenameElement('ulli3', 'li'),
  rr.GroupSiblings('ol', ['olli1', 'olli2', 'olli3']),
  rr.GroupSiblings('ol', ['olli2', 'olli3']),
  rr.GroupSiblings('ol', ['olli3']),
  rr.RenameElement('olli1', 'li'),
  rr.RenameElement('olli2', 'li'),
  rr.RenameElement('olli3', 'li'),
  rr.GroupSiblings('pre', ['preline']),
  rr.ExtractElement('preline'),
  rr.SplitElementAndNest('src', ['imgtemp', 'src']),
  rr.ChildToAttribute('imgtemp', 'src'),
  rr.RenameElement('imgtemp', 'img'),
  rr.ChildToAttribute('a', 'href'),
  rr.GroupSiblings('blockquote', [
      'blockquote1', 'blockquote2', 'blockquote3', 'blockquote4',
      'blockquote5']),
  rr.GroupSiblings('blockquote', [
      'blockquote2', 'blockquote3', 'blockquote4', 'blockquote5']),
  rr.GroupSiblings('blockquote', ['blockquote3', 'blockquote4', 'blockquote5']),
  rr.GroupSiblings('blockquote', ['blockquote4', 'blockquote5']),
  rr.GroupSiblings('blockquote', ['blockquote5']),
  rr.ExtractElement('blockquote1'),
  rr.ExtractElement('blockquote2'),
  rr.ExtractElement('blockquote3'),
  rr.ExtractElement('blockquote4'),
  rr.ExtractElement('blockquote5')
]);
