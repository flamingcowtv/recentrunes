var mediawiki = {
  'b': [rr.Literal("'''"), rr.Ref('wikichunk'), rr.Literal("'''")],
  'del': [rr.Literal('<strike>'), rr.Ref('wikichunk'), rr.Literal('</strike>')],
  'h2': [rr.StartOfLine(), rr.Literal('== '), rr.SingleLineText(), rr.Literal(' =='), rr.EndOfLine()],
  'h3': [rr.StartOfLine(), rr.Literal('=== '), rr.SingleLineText(), rr.Literal(' ==='), rr.EndOfLine()],
  'h4': [rr.StartOfLine(), rr.Literal('==== '), rr.SingleLineText(), rr.Literal(' ===='), rr.EndOfLine()],
  'h5': [rr.StartOfLine(), rr.Literal('===== '), rr.SingleLineText(), rr.Literal(' ====='), rr.EndOfLine()],
  'h6': [rr.StartOfLine(), rr.Literal('====== '), rr.SingleLineText(), rr.Literal(' ======'), rr.EndOfLine()],
  'hr': [rr.StartOfLine(), rr.Literal('----'), rr.EndOfLine()],
  'i': [rr.Literal("''"), rr.Ref('wikichunk'), rr.Literal("''")],
  'nowiki': [rr.Literal('<nowiki>'), rr.MultiLineText(), rr.Literal('</nowiki>')],
  'text': [rr.MultiLineText()],
  'wikichunk': [rr.Or(
      'b',
      'del',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'i',
      'nowiki',
      'text'
   )],
  'wikidoc': [rr.ZeroOrMore('wikichunk')],
};
